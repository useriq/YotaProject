package yota.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.ru.Когда;
import main.java.commonframework.AppStart;
import main.java.commonframework.WebDriverManager;
import main.java.commonframework.tests.CommonWebTest;


import static com.codeborne.selenide.Selenide.sleep;


/**
 * Created by Администратор on 06.08.2016.
 */
public class CommonYotaSteps extends CommonWebTest {
    @Before
    public void beforeScenario(Scenario scenario) throws Exception {
        this.before(scenario);
    }

    @After
    public void afterScenario() throws Exception {
        this.after();
        WebDriverManager.closeAllDrivers();
    }

    @Когда ("^запущен тестовый сервис$")
    public void startApp () throws Exception {
        AppStart.startService("YOTA");
        sleep(10000);
    }
}
