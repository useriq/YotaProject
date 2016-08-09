package main.java.commonframework;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

/**
 * Created by pc-5 on 08.08.2016.
 */
public class ElementWeb {


        WebElement object = null;
        String name = "";
        String elementType = "object";

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        protected ElementWeb(String elementType) {
            this.elementType = elementType;
        }

        protected WebElement getObject() {
            return object;
        }

        protected void setObject(WebElement object) {
            this.object = object;
        }

        /**
         * Проверка, что элемент найден
         *
         * @return true - существует, false - нет
         */
        public boolean exists() {
            return object != null;
        }

        /**
         * Клик по текущему объекту
         */
        public void click() {
            if (getObject() == null) {
                Log.Error("Попытка кликнуть на неинициализированный " + elementType);
                throw new NullPointerException("Объект не получен");
            }

            Log.Info("Клик по " + elementType + " " + name);

            Actions actions = null;
            try {
                actions = new Actions(WebDriverManager.driver(WebDriverManager.getCurrentDriverType()));
            } catch (Exception e) {
                Log.Error("Ошибка передачи комманды на веб драйвер");
                e.printStackTrace();
            }
            actions.click(object);
            actions.build().perform();

        }

        /**
         * Навести курсор на элемент
         */
        public void setCursor() {
            Actions actions = new Actions(getWebDriver());
            actions.moveToElement(object);
            actions.build().perform();
        }

    public void clickRightSide(Dimension size) {
        Actions actions = new Actions(getWebDriver());
        actions.moveToElement(object,size.getWidth()-1,size.getHeight()-1).click().build().perform();
    }

        /**
         * drag and drop
         *
         * @param target элемент на который будет перенесён текщий элемент
         */
        public void dragAndDropTo(WebElement target) {
            Actions actions = new Actions(getWebDriver());
            actions.dragAndDrop(object, target);
            actions.build().perform();
        }





}
