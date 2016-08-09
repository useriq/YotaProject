package main.java.commonframework;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import static com.codeborne.selenide.Selenide.$;

/**
 * Created by pc-5 on 08.08.2016.
 */
public class ButtonWeb extends ElementWeb{

        public ButtonWeb(String name) {
            super("button");
            this.name = name;

            if (name.equalsIgnoreCase("вход")) {
                getLoginButton();
            }
            if (name.equalsIgnoreCase("выход")) {
                getLogoutButton();
            }
            if (name.equalsIgnoreCase("вернуться")) {
                getReturnButton();
            }
            if (this.object == null) {
                Log.Error("Кнопка " + name + " не найдена");
            } else {
                Log.Info("\u001B[36m" + "Кнопка " + name + " найдена" + "\u001B[0m");
            }
        }

        public ButtonWeb(By locator, String name) {
            super("button");
            this.name = name;
            object = $(locator);
            if (this.object == null) {
                Log.Error("Кнопка " + name + " не найдена");
            } else {
                Log.Info("\u001B[36m" + "Кнопка " + name + " найдена" + "\u001B[0m");
            }
        }

        public String getName() {
            return name;
        }

        public WebElement getButton() {
            return object;
        }

        private void setButton(WebElement button) {
            this.object = button;
        }

        private void getLoginButton() {
            try {
                setButton($(By.xpath(".//*[@id='submitImage']")));
            } catch (NoSuchElementException e) {
                setButton(null);
            }
        }

        private void getLogoutButton() {
            try {
                setButton($(By.xpath(".//*[@class = \"main-menu-sprite sprite-LOGOUT\"]")));
            } catch (NoSuchElementException e) {
                setButton(null);
            }
        }

        private void getReturnButton() {
            try {
                setButton($(By.xpath(".//*[@id='returnToLoginFormButton']//td")));
            } catch (NoSuchElementException e) {
                setButton(null);
            }
        }



        @Override
        public void click() {
            if (getObject() == null) {
                Log.Error("Попытка кликнуть на неинициализированную кнопку " + name);
                throw new NoSuchElementException("Объект не получен");
            }

            Actions actions = null;
            try {
                actions = new Actions(WebDriverManager.driver(WebDriverManager.getCurrentDriverType()));
            } catch (Exception e) {
                Log.Error("Ошибка передачи комманды на веб драйвер");
                e.printStackTrace();
            }
            actions.click(getButton()).build().perform();

            Log.Info("Нажатие на кнопку " + name);
        }




}
