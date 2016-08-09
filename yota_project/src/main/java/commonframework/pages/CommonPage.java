package main.java.commonframework.pages;

import main.java.commonframework.Log;
import main.java.commonframework.tests.CommonTest;
import org.openqa.selenium.By;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import static com.codeborne.selenide.Selenide.$;

/**
 * /**
 * Общие методы для всех страниц
 * Created by Администратор on 06.08.2016.
 */
public class CommonPage {

    protected CommonTest test;
    public static final long TIMEOUT_DEFAULT = 60000;

    protected static By by;        //Выражение для проверки та ли это страница
    protected static String name;  //Имя страницы

    public CommonPage(CommonTest _test) {
        test = _test;
    }

    public boolean isThatIt(long timeout) {
      Log.Info("Проверяем, что это страница [" + name + "] ... ");
     //   test.pushTimeout(timeout);
        if (by == null) {
           Log.Error("Локатор страницы не определен!");
       //     test.popTimeout();
            return false;
        }
        if (($(by)).exists()) {
           Log.Info("Это она", true);
        //    test.popTimeout();
            return true;
        } else {Log.Error("Это не она!", true);
         //   test.popTimeout();
            return false;
        }

    }

    /***
     * Убить процесс (через CMD TASKILL IM)
     *
     * @param process - название процесса
     * @throws IOException
     */
    public static void killProcess(String process) throws IOException {
        Runtime.getRuntime().exec("taskkill /im " + process + ".exe /F");
        Log.Info("Завершен процесс"+ process);
    }

    /***
     * Запущен ли процесс
     *
     * @param process- название процесса
     * @throws IOException
     */
    public static boolean isProcessRun (String process){
        boolean flag = false;
        try {
            String process_line;

            Process p = Runtime.getRuntime().exec(System.getenv("windir") +"\\system32\\"+"tasklist.exe");
            BufferedReader input =
                    new BufferedReader(new InputStreamReader(p.getInputStream()));
            while ((process_line = input.readLine()) != null) {

                if (process_line.indexOf(process)>=0){ // <-- поиск процесса
                    Log.Info(process_line.substring(process_line.indexOf(process)));

                    flag = true ;
                }
            }
            if (flag==false){
                Log.Info("процесс " + process +" не обнаружен");
            }

            input.close();

        } catch (Exception err) {
            err.printStackTrace();
        }
        return flag;
    }

    public static int countProcessRun (String process){

        int count = 0;
        try {
            String process_line;

            Process p = Runtime.getRuntime().exec(System.getenv("windir") +"\\system32\\"+"tasklist.exe");
            BufferedReader input =
                    new BufferedReader(new InputStreamReader(p.getInputStream()));
            while ((process_line = input.readLine()) != null) {

                if (process_line.indexOf(process)>=0){ // <-- поиск процесса
                    count++;

                }
            }

            input.close();

        } catch (Exception err) {
            err.printStackTrace();
        }
        return count;
    }
}
