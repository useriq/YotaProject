package main.java.commonframework;

import com.codeborne.selenide.webdriver.WebDriverFactory;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;

import java.util.HashMap;
import java.util.Iterator;

import static com.codeborne.selenide.WebDriverRunner.setWebDriver;
import static org.junit.Assert.fail;

/**
 * Created by Администратор on 06.08.2016.
 */
public class WebDriverManager {
    static WebDriverFactory webDriverFactory = new WebDriverFactory();


    static { //Установка путей к вебдрайверам при старте приложения
        System.setProperty("webdriver.ie.driver", "C:/Project/yota_project/drivers/IEDriverServer.exe");
        System.setProperty("webdriver.chrome.driver",  "C:/Project/yota_project/drivers/chromedriver.exe");
    }
    //Поддерживаемые драйверы
    public enum DriverType {
        FIREFOX,
        CHROME,
        IE
    }

    private static DriverType current = null; //Текущий драйвер
    //Хранилище драйверов
    private static HashMap<DriverType, WebDriver> drivers = new HashMap<>();
    //Параметры для подключения драйверов (нужны при перезапуске)
    private static HashMap<DriverType, HashMap<String, String>> paramsMap = new HashMap<>();

    /**
     * Получаем текущий тип драйвера
     *
     * @return
     */
    public static DriverType getCurrentDriverType() {
        return current;
    }

    /**
     * Закрываем несколько драйверов
     *
     * @param driversToClose
     */
    public static void closeDrivers(DriverType[] driversToClose) {
        for (int i = 0; i < driversToClose.length; ++i) {
            closeDriver(driversToClose[i]);
        }
    }

    /**
     * Закрываем все открытые драйверы
     */
    public static void closeAllDrivers() {
       Log.Info("Закрываем все вебдрайвера");
        for (DriverType dt : DriverType.values()) {
            closeDriver(dt);
        }
    }

    /**
     * Получаем драйвер из сохранённых, если такого нет, генерируем исключение
     *
     * @param type Тип драйвера
     * @return
     * @throws Exception
     */
    public static WebDriver driver(DriverType type) throws Exception {
        if (drivers.containsKey(type)) {
            setWebDriver(drivers.get(type));
            current = type;
            return drivers.get(type);
        }
        throw new Exception("Нет сохранённого драйвера " + type);
    }

    /**
     * Получаем текущий драйвер
     *
     * @return
     */
    public static WebDriver driver() {
        if (current != null) {
            return drivers.get(current);
        }
        fail("Нет ни одного сохранённого драйвера ");
        return null;
    }

    /**
     * Закрываем драйвер
     *
     * @param type тип драйвера
     */
    public static void closeDriver(DriverType type) {
        if (drivers.containsKey(type)) {
           Log.Info("Закрываем вебдрайвер " + type.toString());
            drivers.get(type).close(); //закрываем
            drivers.get(type).quit(); //Выходим
            if (current == type && drivers.size() > 1) { //Это текущий драйвер и есть ещё драйвера
                Iterator<DriverType> iterator = drivers.keySet().iterator();
                DriverType dti;
                do {
                    dti = iterator.next();
                    if (dti != type) {
                        setWebDriver(drivers.get(dti)); //Любой из оставшихся драйверов делаем активным
                        break;
                    }
                } while (dti != null);
            }
            drivers.remove(type);
            paramsMap.remove(type);
        }
    }

    /**
     * Проверяем, есть ли сохранённый драйвер такого типа
     *
     * @param type
     * @return
     */
    public static boolean isExist(DriverType type) {
        return drivers.containsKey(type);
    }

    /**
     * Получаем драйвер. Если драйвер нужного типа найден среди сохранённых, то возвращаем его
     * Если нет, то создаём новый
     *
     * @param type   Тип драйвера
     * @param params Параметры
     * @return
     * @throws Exception
     */
    public static WebDriver getDriver(DriverType type, HashMap<String, String> params) throws Exception {
        return getDriver(type, params, null);
    }

    /**
     * Получаем драйвер. Если драйвер нужного типа найден среди сохранённых, то возвращаем его
     * Если нет, то создаём новый
     *
     * @param type   Тип драйвера
     * @param params Параметры
     * @return
     * @throws Exception
     */
    public static WebDriver getDriver(DriverType type, HashMap<String, String> params, WebDriverEventListener webDriverEventListener) throws Exception {
        if (isExist(type)) {//Если есть такой сохранённый - возвращаем его
            setWebDriver(drivers.get(type));
            current = type;
            return drivers.get(type);
        }

        //Создаём новый драйвер
        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
        WebDriver driver = null;
        switch (type) {
            case FIREFOX: {
                desiredCapabilities = DesiredCapabilities.firefox();
                desiredCapabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
               // if (Config.getHubURL() == null)
                    driver = new FirefoxDriver(desiredCapabilities);
              //  else
                //    driver = new RemoteWebDriver(Config.getHubURL(), desiredCapabilities);

                if (desiredCapabilities.getBrowserName().toLowerCase().equals("firefox")) {
                    driver.manage().deleteAllCookies();
                    driver.manage().window().maximize();
                }
                break;
            }
            case CHROME: {
                desiredCapabilities = DesiredCapabilities.chrome();
                desiredCapabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
               // if (Config.getHubURL() == null)
                   driver = new ChromeDriver(desiredCapabilities);
              //  else {
                    //webDriverFactory.setMode(WebDriverFactoryMode(SINGLETONE));
                 //   driver = webDriverFactory.createWebDriver(null);

                    //driver = new RemoteWebDriver(Config.getHubURL(), desiredCapabilities);
               // }
                if (desiredCapabilities.getBrowserName().toLowerCase().equals("chrome")) {
                    driver.manage().deleteAllCookies();
                    driver.manage().window().maximize();
                }
                break;
            }
            case IE: {
                desiredCapabilities = DesiredCapabilities.internetExplorer();
                desiredCapabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
                ///if (Config.getHubURL() == null)
                    driver = new InternetExplorerDriver(desiredCapabilities);
              //  else
                //    driver = new RemoteWebDriver(Config.getHubURL(), desiredCapabilities);

                if (desiredCapabilities.getBrowserName().toLowerCase().equals("internet explorer")) {
                    driver.manage().deleteAllCookies();
                    driver.manage().window().maximize();
                }
                break;
            }

        }

        if (driver == null) {
           Log.Fatal("Не смогли получить драйвер!");
        }
        if (webDriverEventListener != null) {
            EventFiringWebDriver eventFiringWebDriverdriver = new EventFiringWebDriver(driver);
            eventFiringWebDriverdriver.register(webDriverEventListener);

            driver = eventFiringWebDriverdriver;
        }

        paramsMap.put(type, params); //Сохраняем параметры
        drivers.put(type, driver);   //Сохраняем драйвер
        setWebDriver(driver);        //Ставим драйвер в селениде
        current = type;              //Утанавливаем индикатор текущего драйвера
        return driver;
    }

    /**
     * Получаем драйвер. Параметры не передаются, типично для браузеров
     *
     * @param type
     * @return
     * @throws Exception
     */
    public static WebDriver getDriver(DriverType type) throws Exception {
        return getDriver(type, null);
    }

}
