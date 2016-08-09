package yota.steps;

import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Когда;
import cucumber.api.java.ru.То;
import main.java.commonframework.Log;
import main.java.commonframework.Storage;
import main.java.commonframework.Tools;
import main.java.commonframework.WebDriverManager;
import main.java.commonframework.tests.CommonWebTest;
import main.java.yotaframework.Products;
import main.java.yotaframework.pages.CommonYotaPage;

import static com.codeborne.selenide.Selenide.open;
import static main.java.yotaframework.pages.CommonYotaPage.URL_YOTA;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * Created by Администратор on 06.08.2016.
 */
public class CommonYotaPageSteps extends CommonWebTest {

    private static final Integer MAX_AMOUNT = 10000;
    private static final Integer MIN_AMOUNT = -10000;

    @То("^открыта стартовая страница$")
    public void isCommonYotaPageOpened() {
        CommonYotaPage commonYotaPage = new CommonYotaPage(this);
        assertTrue("Стартовая страница тестового приложения Yota успешно открыта", commonYotaPage.isThatIt(120000));
        Log.screenshot();

    }

    @Когда("^открыт браузер$")
    public void openedBrowser() throws Exception {

        Log.Info("Открываем браузер");
        WebDriverManager.getDriver(WebDriverManager.DriverType.CHROME, null);
    }

    @И("^введен url веб-приложения$")
    public void openApplication() throws Exception {
        Log.Info("Переходим на " + URL_YOTA);
        open(URL_YOTA);

    }


    @Когда("^введено \"(.+)\" в поле \"Пополнить счет\"$")
    public void filledAmount(String numbers) {
        switch (numbers.toLowerCase()) {
            case "положительное целое число":
                (new CommonYotaPage(this)).filledAmount(Integer.toString(Tools.getRandomInt(1, MAX_AMOUNT)));
                break;
            case "положительное число с копейками":
                break;
            case "отрицательное целое число":
                (new CommonYotaPage(this)).filledAmount(Integer.toString(Tools.getRandomInt(MIN_AMOUNT, -1)));
                break;
            default:
                fail("Неизвестная число " + numbers);
        }

    }

    @Когда("^нажата кнопка \"(.+)\"$")
    public void clickButton(String nameBtn) {
        switch (nameBtn) {
            case "Пополнить счет":
                (new CommonYotaPage(this)).clickBtn("Пополнить");
                break;
            case "Сброс":
                (new CommonYotaPage(this)).clickBtn(nameBtn);
                break;
            case "Подключить":
                (new CommonYotaPage(this)).clickBtnConnect();
                break;
            default:
                fail("Неизвестная кнопка " + nameBtn);
        }

    }

    @То("^баланс изменился на сумму пополнения$")
    public void chechkedBallance() {
        Log.Info("Проверяем, что балланс изменился на сумму пополнения", true);
        (new CommonYotaPage(this)).chechkedBallance();

    }


    @И("^\"текущие условия\" соответствуют \"(.+)\" продукту$")
    public void checkCurrentConditions(String typeProduct) {
        Log.Info("Проверяем, \"текущие условия\" соответствуют "+typeProduct+ " продукту");
        switch (typeProduct.toLowerCase()){
            case "бесплатному":
                (new CommonYotaPage(this)).checkCurrCondition(0);
                break;
            case "подключенному":
                (new CommonYotaPage(this)).checkCurrCondition(Products.getInstance().getNewProduct());
                break;
            default:
                fail("Неизвестный продукт" + typeProduct);
        }


    }

    @И("^\"новые условия\" соответствуют \"(.+)\" продукту$")
    public void checkNewConditions(String typeProduct) {
        Log.Info("Проверяем, \"новые условия\" соответствуют "+typeProduct+ "  продукту");

        switch (typeProduct.toLowerCase()){
            case "бесплатному":
                (new CommonYotaPage(this)).checkNewCondition(0);
                break;
            case "новому":
                (new CommonYotaPage(this)).checkNewCondition(Products.getInstance().getPosition());
                break;
            default:
                fail("Неизвестный продукт" + typeProduct);
        }
    }

    @И("^\"новые условия\" по всем продуктам верны$")
    public void checkNewConditionsAllProducts() {
        Log.Info("Проверяем, \"новые условия\" у всех продуктов");
        (new CommonYotaPage(this)).checkNewConditionsAllProducts();
    }

    @И("^получена информация по продуктам$")
    public void getInfoAllProducts() {
        Log.Info("Получаем информацию о продуктах");
        (new CommonYotaPage(this)).getInfoAllProducts();


    }

    @Когда("^выбран новый продукт$")
    public void selectNewProduct() {
        Log.Info("Выбираем новый продукт");
        (new CommonYotaPage(this)).selectNewProduct();
    }

    @И("^перемещен слайдер на \"(.+)\" продукт$")
    public void moveToNewProductString (String typeProduct) {
        switch (typeProduct.toLowerCase()){
            case "следующий":
                Log.Info("Перемещаем слайдер на следующий продукт");
                (new CommonYotaPage(this)).moveToNextProduct();
                break;
            case "предыдущий":
                Log.Info("Перемещаем слайдер на предыдущий продукт");
                (new CommonYotaPage(this)).moveToPrevProduct();
                break;
            case "выбранный":
                Log.Info("Перемещаем слайдер на выбранный продукт");
                (new CommonYotaPage(this)).moveToNewProduct();
                break;
            case "бесплатный":
                Log.Info("Перемещаем слайдер на бесплатный продукт");
                (new CommonYotaPage(this)).moveToProduct(0);
                break;
            default:
                fail("Неизвестный тип продукта" + typeProduct);
        }
    }

    @Когда("^пополнен счет на \"(.+)\"$")
    public void filledUpAccount(String amount) {
        switch (amount.toLowerCase()){
            case "сумму стоимости выбранного продукта":
                Log.Info("Пополнение счета на сумму выбранного продукта. Сумма: ");
                (new CommonYotaPage(this)).filledUpAccount();
                break;
            case "сумму достаточную выполнения для сценария":
                Log.Info("Пополнение счета на сумму выбранного продукта. Сумма: ");
                Storage.put("MAX_AMOUNT","20000");
                (new CommonYotaPage(this)).filledUpAccount(Storage.getString("MAX_AMOUNT"));
                break;

            default:
                fail("Неизвестный тип cуммы" + amount);
        }
    }

    @И("^баланс уменьшился на стоимость продукта$")
    public void checkBalanceAfterConnect() {
        Log.Info("Проверяем баланс после подключения продукта");
        (new CommonYotaPage(this)).checkBalanceAfterConnect();
    }

    @И("^кнопка \"Подключить\" \"(.+)\"$")
    public void checkConnectBtnDisabled(String btnCond) {
        switch (btnCond.toLowerCase()){
            case "неактивна":
                Log.Info("Проверяем что кнопка \"Подключить\" неактивна");
                (new CommonYotaPage(this)).checkConnectBtnDisabled();
                break;
            case "активна":
                Log.Info("Проверяем что кнопка \"Подключить\" активна");
                (new CommonYotaPage(this)).checkConnectBtnEnabled();
                break;
            default:
                fail("Неизвестное состояние кнопки \"Подключить\"" + btnCond);
        }


    }

    @И("^баланс равен \"(.+)\"$")
    public void copmareBalance (String num){
        Log.Info("Проверяем баланас на совпадение с числом "+num);
        (new CommonYotaPage(this)).copmareBalance(num);
    }



}
