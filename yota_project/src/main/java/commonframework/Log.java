package main.java.commonframework;

import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

/**
 * Created by Администратор on 06.08.2016.
 */
public class Log {
    protected static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss.SS");
    protected static Scenario scenario = null;
    private static boolean first = true;
    private Log() {


    }
    protected static String dateTime() {
        return simpleDateFormat.format(new Date());
    }

    public static void setScenario(Scenario _scenario) {
        first = true;
        scenario = _scenario;
        System.out.println();
        System.out.println();
        System.out.println(ANSI.YELLOW + "******************************************************************************" + ANSI.RESET);
        System.out.println();
        System.out.println(ANSI.GREEN + dateTime() + ANSI.PURPLE + "  Запуск нового сценария" + ANSI.RESET);
        System.out.println(ANSI.PURPLE + scenario.getName() + ANSI.RESET);
        System.out.println();
        System.out.println(ANSI.YELLOW + "******************************************************************************" + ANSI.RESET);
        System.out.println();
    }
    public static void clearScenario() {
        scenario = null;
    }

    private static synchronized void Message(MessageType status, String message, Boolean screensht) {
        ANSI color;
        switch (status) {
            case INFO:
                color = ANSI.BLUE;
                break;
            case WARNING:
                color = ANSI.YELLOW;
                break;
            case ERROR:
                color = ANSI.RED;
                break;
            case FAIL:
                color = ANSI.RED;
                break;
            case PASS:
                color = ANSI.GREEN;
                break;
            case FATAL:
                color = ANSI.RED;
                break;
            case UNKNOWN:
                color = ANSI.PURPLE;
                break;
            case SKIP:
                color = ANSI.RESET;
                break;
            case DEBUG:
                color = ANSI.YELLOW;
                break;
            default:
                color = ANSI.RESET;
                status = MessageType.WARNING;
        }
        System.out.println(ANSI.GREEN + dateTime() + "  " + color + message + ANSI.RESET);

        if (scenario != null) {
            if(first){
                first=false;
                scenario.write("Сообщения");
            }
            message = "<b>" + message + "</b>";


            if (screensht && WebDriverManager.getCurrentDriverType() != null)
                Log.screenshot();


            scenario.write(message); //Добавляет сообщение в лог кукумбера

        }
    }

    public static synchronized void Info(String message) {
        Message(MessageType.INFO, message,false);
    }
    public static synchronized void Info(String message, Boolean screensht) {
        Message(MessageType.INFO, message, screensht);
    }
    public static synchronized void Fatal(String message) {
        Message(MessageType.FATAL, message,false);
    }
    public static synchronized void Error(String message) {
        Message(MessageType.ERROR, message,false);
    }
    public static synchronized void Error(String message, boolean screensht) {
        Message(MessageType.ERROR, message, screensht);
    }

    public static void screenshot() {
        if (scenario == null) return;
        Info("Скриншот");
        byte[] bytes = ((TakesScreenshot) getWebDriver()).getScreenshotAs(OutputType.BYTES);

        scenario.write("Скриншот");
        scenario.embed(bytes, "image/png");
    }

    public enum ANSI {
        RESET {
            public String toString() {
                return "\u001B[0m";
            }
        },
        BLACK {
            public String toString() {
                return "\u001B[30m";
            }
        },
        RED {
            public String toString() {
                return "\u001B[31m";
            }
        },
        GREEN {
            public String toString() {
                return "\u001B[32m";
            }
        },
        YELLOW {
            public String toString() {
                return "\u001B[33m";
            }
        },
        BLUE {
            public String toString() {
                return "\u001B[34m";
            }
        },
        PURPLE {
            public String toString() {
                return "\u001B[35m";
            }
        },
        CYAN {
            public String toString() {
                return "\u001B[36m";
            }
        },
        WHITE {
            public String toString() {
                return "\u001B[37m";
            }
        }
    }

    enum MessageType {
        MESSAGE,
        WARNING,
        ERROR,
        CHECKPOINT,
        FATAL,
        UNKNOWN,
        SKIP,
        FAIL,
        PASS,
        INFO,
        DEBUG,
    }
}
