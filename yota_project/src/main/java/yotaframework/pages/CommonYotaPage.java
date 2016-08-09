package main.java.yotaframework.pages;

import main.java.commonframework.ButtonWeb;
import main.java.commonframework.Log;
import main.java.commonframework.Storage;
import main.java.commonframework.Tools;
import main.java.commonframework.pages.CommonWebPage;
import main.java.commonframework.tests.CommonTest;
import main.java.yotaframework.Products;
import org.openqa.jetty.html.Break;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import sun.reflect.generics.reflectiveObjects.LazyReflectiveObjectGenerator;

import static com.codeborne.selenide.Selenide.sleep;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static com.codeborne.selenide.Selenide.$;

/**
 * Created by Администратор on 06.08.2016.
 */
public class CommonYotaPage extends CommonWebPage {
    static public String URL_YOTA = "http://localhost:4567";
    static private final String XPATH_BALANCE_FIELD = "//input[@id='amount']";
    static private final String XPATH_BALANCE_BTN = "//*[@id='instant-payment']//a[contains(text(),'#xnamebtn')]";
    static private final String XPATH_CONNECT_BTN_DISABLED = "//*[@id='sliders']//div[@class='tarriff-info']//a[@class='btn disabled']";
    static private final String XPATH_CONNECT_BTN = "//*[@id='sliders']//div[@class='tarriff-info']//a[@class='btn']";
    static private final String XPATH_BALANCE = "//*[@id='balance-holder']/span";

    static private final String XPATH_CURR_COND_TIME = "//*[@id='sliders']//div[@class='hint hint_pos_current-conditions']//div[@class='tarriff-info']//div[@class='time']";
    static private final String XPATH_CURR_COND_SPEED = "//*[@id='sliders']//div[@class='hint hint_pos_current-conditions']//div[@class='tarriff-info']//div[@class='speed']";
    static private final String XPATH_CURR_COND_COST = "//*[@id='sliders']//div[@class='hint hint_pos_current-conditions']//div[@class='tarriff-info']//div[@class='cost no-arrow']";

    static private final String XPATH_NEW_COND_TIME ="//*[@id='sliders']//div[@class='main-offer-container line']//div[@class='tarriff-info']//div[@class='time']";
    static private final String XPATH_NEW_COND_SPEED ="//*[@id='sliders']//div[@class='main-offer-container line']//div[@class='tarriff-info']//div[@class='speed']";
    static private final String XPATH_NEW_COND_COST ="//*[@id='sliders']//div[@class='main-offer-container line']//div[@class='tarriff-info']//div[@class='cost']";

    static private final String XPATH_NEXT_PRODUCT = "//*[@id='sliders']//div[@class='increase']//a[@class='icon']";
    static private final String XPATH_PREV_PRODUCT = ".//*[@id='sliders']//div[@class='decrease']//a[@class='icon']";


    static private final String VALUE_NEW_COND_TIME = "30";
    static private final String VALUE_NEW_COND_TIME_TEXT = "дней останется";

    static private final String VALUE_CURR_COND_TIME = "0";
    static private final String VALUE_CURR_COND_TIME_TEXT = "дней осталось";



    public CommonYotaPage(CommonTest test) {
        super(test);
        name = "Стартовая страница тестового приложения Yota";
        by = By.xpath(".//div[@id='sliders']");
    }

    public void filledAmount(String amount) {
        $(By.xpath(XPATH_BALANCE_FIELD)).clear();
        $(By.xpath(XPATH_BALANCE_FIELD)).sendKeys(amount);
        Storage.put("amount",amount);
        Log.Info("Введено значение" + amount,true);
    }

    public void clickBtn (String nameBtn)
    {   Storage.put("balance",$(By.xpath(XPATH_BALANCE)).getText());
        $(By.xpath(XPATH_BALANCE_BTN.replace("#xnamebtn",nameBtn))).click();
        Log.Info("Нажата кнопка "+ nameBtn,true);
        sleep(3000);
    }

    public void clickBtnConnect(){
        Storage.put("balance",$(By.xpath(XPATH_BALANCE)).getText());
        $(By.xpath(XPATH_CONNECT_BTN)).click();
        Log.Info("Нажата кнопка подключить",true);
    }

    public void getInfoAllProducts()
    {
        Products.getInstance();
        for (int i=0;i<Products.getInstance().getNUM_PRODUCTS();i++)
        {
            Log.Info("Информация о продукте " + i+ " : ");
            Log.Info("Скорость : "+ Products.getInstance().getProductInfo(i).get("Speed") + " " +
                    Products.getInstance().getProductInfo(i).get("SpeedText"));
            Log.Info("Стоимость : "+ Products.getInstance().getProductInfo(i).get("Cost") + " " +
                    Products.getInstance().getProductInfo(i).get("CostText"));
        }
    }

    public void checkCurrCondition(Integer num){
        assertTrue("Текущая скорость не соответствует " + num + " продукту. Ожидалось: " +
                Products.getInstance().getProductInfo(num).get("Speed") + ". Получили: "+
                $(By.xpath(XPATH_CURR_COND_SPEED+"/strong")).getText() , $(By.xpath(XPATH_CURR_COND_SPEED+"/strong")).getText().equals(Products.getInstance().getProductInfo(num).get("Speed")));

        assertTrue("Текущая подпись скорости не соответствует " + num + " продукту ", $(By.xpath(XPATH_CURR_COND_SPEED+"/span")).getText().equals(Products.getInstance().getProductInfo(num).get("SpeedText")));

        assertTrue("Текущая цена не соответствует " + num + " продукту ", $(By.xpath(XPATH_CURR_COND_COST+"/strong")).getText().equals(Products.getInstance().getProductInfo(num).get("Cost")));

        assertTrue("Текущая подпись цены не соответствует " + num + " продукту. Ожидалось: " +
                        Products.getInstance().getProductInfo(num).get("CostText")+ ". Получили: "+
                        $(By.xpath(XPATH_CURR_COND_COST+"/span")).getText(), $(By.xpath(XPATH_CURR_COND_COST+"/span")).getText().equals(Products.getInstance().getProductInfo(num).get("CostText")));

        assertTrue("Текущее число дней не соответствует " + num + " продукту. Ожидалось: " +
                VALUE_CURR_COND_TIME + ". Получили: "+
                $(By.xpath(XPATH_CURR_COND_TIME+"/strong")).getText() , $(By.xpath(XPATH_CURR_COND_TIME+"/strong")).getText().equals(VALUE_CURR_COND_TIME));

        assertTrue("Текущая подпись числа дней не соответствует " + num + " продукту ", $(By.xpath(XPATH_CURR_COND_TIME+"/span")).getText().equals(VALUE_CURR_COND_TIME_TEXT));


        if (num ==0)
            Log.Info("Текущий условия соответствуют \"бесплатному\" продукту как и ожидалось", true);
        else
        Log.Info("Текущий условия соответствуют " +num+ " продукту как и ожидалось",true);
    }

    public void checkNewCondition(Integer num){
        assertTrue("Новая скорость не соответствует " + num + " продукту. Ожидалось: " +
                Products.getInstance().getProductInfo(num).get("Speed") + ". Получили: "+
                $(By.xpath(XPATH_NEW_COND_SPEED+"/strong")).getText() , $(By.xpath(XPATH_NEW_COND_SPEED+"/strong")).getText().equals(Products.getInstance().getProductInfo(num).get("Speed")));
        assertTrue("Новая подпись скорости не соответствует " + num + " продукту ", $(By.xpath(XPATH_NEW_COND_SPEED+"/span")).getText().equals(Products.getInstance().getProductInfo(num).get("SpeedText")));
        assertTrue("Новая цена не соответствует " + num + " продукту ", $(By.xpath(XPATH_NEW_COND_COST+"/strong")).getText().equals(Products.getInstance().getProductInfo(num).get("Cost")));
        assertTrue("Новая подпись цены не соответствует " + num + " продукту. Ожидалось: " +
                Products.getInstance().getProductInfo(num).get("CostText")+ ". Получили: "+
                $(By.xpath(XPATH_NEW_COND_COST+"/span")).getText(), $(By.xpath(XPATH_NEW_COND_COST+"/span")).getText().equals(Products.getInstance().getProductInfo(num).get("CostText")));

        assertTrue("Текущее число дней не соответствует " + num + " продукту. Ожидалось: " +
                VALUE_NEW_COND_TIME + ". Получили: "+
                $(By.xpath(XPATH_NEW_COND_TIME+"/strong")).getText() , $(By.xpath(XPATH_NEW_COND_TIME+"/strong")).getText().equals(VALUE_NEW_COND_TIME));

        assertTrue("Текущая подпись числа дней не соответствует " + num + " продукту ", $(By.xpath(XPATH_NEW_COND_TIME+"/span")).getText().equals(VALUE_NEW_COND_TIME_TEXT));



        if (num ==0)
            Log.Info("Новые условия соответствуют \"бесплатному\" продукту как и ожидалось", true);
        else
            Log.Info("Новые условия соответствуют " +num+ " продукту как и ожидалось",true);
    }

    public void checkNewConditionsAllProducts(){
        Integer numProducts = Products.getInstance().getNUM_PRODUCTS();
        for (int i =0; i<numProducts-1;i++)
        {
            moveToNextProduct();
            checkCurrCondition(Products.getInstance().getCurrProduct());
            checkNewCondition(i+1);
        }
    }

    public void selectNewProduct(){
        Integer newProduct = Tools.getRandomInt(1,Products.getInstance().getNUM_PRODUCTS()-1);
        Products.getInstance().setNewProduct(newProduct);
        Log.Info("Новый продукт " + newProduct);
        Log.Info("Новые условия: ");
        Log.Info("Скорость: " + Products.getInstance().getProductInfo(newProduct).get("Speed")+ " "
                +  Products.getInstance().getProductInfo(newProduct).get("SpeedText"));
        Log.Info("Стоимость: " + Products.getInstance().getProductInfo(newProduct).get("Cost")+ " "
                +  Products.getInstance().getProductInfo(newProduct).get("CostText"));
    }

    public void moveToNewProduct(){
        if (Products.getInstance().getNewProduct() == Products.getInstance().getPosition())
        {
            Log.Info("Новый продукт соответствует текущей позиции");

        }
        else
        if (Products.getInstance().getNewProduct() > Products.getInstance().getPosition())
        {  do {
            moveToNextProduct();
        }
        while ((Products.getInstance().getPosition()!=Products.getInstance().getNewProduct())
                        &&(Products.getInstance().getPosition() < Products.getInstance().getNUM_PRODUCTS()));
        }
        else
        {
            do {
            moveToPrevProduct();
               }
            while (Products.getInstance().getPosition()!=Products.getInstance().getNewProduct()
                &&(Products.getInstance().getPosition() >=0));

        }

    }

    public void moveToProduct(Integer numProduct){
        if (numProduct == Products.getInstance().getPosition())
        {
            Log.Info("Необходимый продукт соответствует текущей позиции");

        }
        else
        if (numProduct > Products.getInstance().getPosition())
        {  do {
            moveToNextProduct();
        }
        while ((Products.getInstance().getPosition()!=numProduct)
                        &&(Products.getInstance().getPosition() < Products.getInstance().getNUM_PRODUCTS()));
        }
        else
        {
            do {
                Log.Info("текущая позиция : "+Products.getInstance().getPosition());
                moveToPrevProduct();
                Log.Info("новая позиция : "+Products.getInstance().getPosition());
            }
            while (Products.getInstance().getPosition()!=numProduct
                    &&(Products.getInstance().getPosition() > 0));

        }

    }

    public void moveToNextProduct(){
        ButtonWeb increaseBtn = new ButtonWeb(By.xpath(XPATH_NEXT_PRODUCT),"increase");
        Dimension size = increaseBtn.getButton().getSize();
        increaseBtn.clickRightSide(size);
        if (Products.getInstance().getPosition() >= (Products.getInstance().getNUM_PRODUCTS()-1))
            Log.Info("Нажата кнопка перехода на следующий продукт. Но это самая крайний правый продукт", true);
            else
            Products.getInstance().setPosition(Products.getInstance().getPosition()+1);
        Log.Info("Нажата кнопка перехода на следующий продукт", true);
    }

    public void moveToPrevProduct(){
        $(By.xpath(XPATH_PREV_PRODUCT)).click();
        if (Products.getInstance().getPosition() <= 0)
            Log.Info("Нажата кнопка перехода на предыдущий продукт. Но это самая крайний левый продукт", true);
        else
            Products.getInstance().setPosition(Products.getInstance().getPosition()-1);
        Log.Info("Нажата кнопка перехода на предыдущий продукт", true);
    }

    public void filledUpAccount(){
        filledAmount(Products.getInstance().getProductInfo(Products.getInstance().getNewProduct()).get("Cost"));
        clickBtn("Пополнить");
    }

    public void filledUpAccount(String amount){
        filledAmount(amount);
        clickBtn("Пополнить");
    }

    public void chechkedBallance(){
        double balance = Double.valueOf(Storage.getString("balance"))+Double.valueOf(Storage.getString("amount"));
        Log.Info("Сумма старого баланса и суммы пополнения: " + String.format("%.0f",balance).replace(',','.'));
        Log.Info("Сумма баланса после пополнения: " + $(By.xpath(XPATH_BALANCE)).getText());
        assertTrue("Баланс изменился не правильно. Новый баланс должен быть: \""+ String.format("%.0f",balance).replace(',','.')
                + "\" А фактический: \""+$(By.xpath(XPATH_BALANCE)).getText()+"\"" , $(By.xpath(XPATH_BALANCE)).getText().equals(String.format("%.0f",balance).replace(',','.')) );
        Log.Info("Баланс изменился на сумму пополнения");
        Storage.put("balance",$(By.xpath(XPATH_BALANCE)).getText());
    }

    public void checkBalanceAfterConnect(){
        double balance = Double.valueOf(Storage.getString("balance"))-Double.valueOf(Products.getInstance().getProductInfo(Products.getInstance().getNewProduct()).get("Cost"));
        Log.Info("Сумма баланса до списания: "+ Storage.getString("balance"));
        Log.Info("Сумма списания: "+ Double.valueOf(Products.getInstance().getProductInfo(Products.getInstance().getNewProduct()).get("Cost")));
        assertTrue("Баланс изменился не правильно. Новый баланс должен быть: \""+ String.format("%.0f",balance).replace(',','.')
                + "\" А фактический: \""+$(By.xpath(XPATH_BALANCE)).getText()+"\"" , $(By.xpath(XPATH_BALANCE)).getText().equals(String.format("%.0f",balance).replace(',','.')) );
        Log.Info("Баланс изменился на стоимость продукта");
        Storage.put("balance",$(By.xpath(XPATH_BALANCE)).getText());
    }

    public void checkConnectBtnDisabled(){
        assertTrue("Не найдена неактивная кнопка Подключить", $(By.xpath(XPATH_CONNECT_BTN_DISABLED)).exists());
        Log.Info("Кнопка \"Поключить\" неактивна",true);
    }

    public void checkConnectBtnEnabled(){
        assertTrue("Не найдена активная кнопка Подключить", $(By.xpath(XPATH_CONNECT_BTN)).exists());
        Log.Info("Кнопка \"Поключить\" активна",true);
    }

    public void copmareBalance(String num){
        Log.Info("Значние в поле баланс: "+ $(By.xpath(XPATH_BALANCE)).getText());
        Log.Info("Сравниваемое значение: "+num);
        assertTrue("Баланс не совпадает проверяемым со значением. Ожидаемое значение\""+ num
                + "\" А фактическое: \""+$(By.xpath(XPATH_BALANCE)).getText()+"\"" , $(By.xpath(XPATH_BALANCE)).getText().equals(num) );

    }
}
