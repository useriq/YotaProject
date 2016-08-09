package main.java.commonframework.tests;

import cucumber.api.Scenario;
import main.java.commonframework.AppStart;
import main.java.commonframework.Log;
import main.java.commonframework.Storage;
import main.java.commonframework.WebDriverManager;
import main.java.yotaframework.Products;

import java.util.HashMap;

import static main.java.commonframework.pages.CommonPage.killProcess;

/**
 * Created by Администратор on 06.08.2016.
 */
public class CommonWebTest extends CommonTest {

    //аналог data для хранения нужных данных
    public static HashMap<String, Object> store = new HashMap<>();
    @Override
    protected void startAndUpdate() {
    }
    /***
     * Действия после завершения сценария
     * @throws Exception
     */
    @Override
    public void after() throws Exception {
        Log.Info("Действия после завершения сценария");
        super.after();
        WebDriverManager.closeAllDrivers();
        AppStart.killProcess(Integer.valueOf(Storage.getString("PID")));
        Storage.clear();
        Products.getInstance().clearPosition();
    }



    @Override
    public void before(Scenario _scenario) throws Exception {
        Log.Info("Действия до начала сценария");
        super.before(_scenario);
        Storage.clear();
        Products.getInstance().clearPosition();
        AppStart.resetApplicationFolder(); // Очищение папки приложения. Копирование jar приложения


    }
}
