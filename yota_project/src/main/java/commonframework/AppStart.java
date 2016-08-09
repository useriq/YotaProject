package main.java.commonframework;

import org.jutils.jprocesses.JProcesses;
import org.jutils.jprocesses.model.ProcessInfo;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

import static main.java.commonframework.pages.CommonPage.isProcessRun;
import static main.java.commonframework.pages.CommonPage.countProcessRun;

/**
 * Created by Администратор on 06.08.2016.
 */
public class AppStart {
    public static String FULL_COMMAND_RUN_APPLICATION = "java  -jar test-slider-1.0.0-SNAPSHOT.jar";

public static void resetApplicationFolder() throws Exception{
    ProcessBuilder processBuilder = new ProcessBuilder("cmd", "/C", "/Project/resetApplicationFolder.bat");
    Process process = processBuilder.start();
//    Log.Info("Папка приложения очищена.Скопирован новыый test-slider-1.0.0-SNAPSHOT.jar");
}

public static void getRunProcess(String process){

    List<ProcessInfo> processesList = JProcesses.getProcessList();

    for (final ProcessInfo processInfo : processesList) {
       if (processInfo.getName().equals("java.exe")) {
           Log.Info("Process PID: " + processInfo.getPid());
           Log.Info("Process Name: " + processInfo.getName());
           Log.Info("Full command: " + processInfo.getCommand());
           Log.Info("------------------");
       }
    }
    }

    public static boolean isProcessStart(String fullComand)
    {
        List<ProcessInfo> processesList = JProcesses.getProcessList();

        for (final ProcessInfo processInfo : processesList) {
            if (processInfo.getCommand().equals(fullComand)) {
                Log.Info("Process PID: " + processInfo.getPid());
                Log.Info("Process Name: " + processInfo.getName());
                Log.Info("Full command: " + processInfo.getCommand());
                Log.Info("------------------");
                Storage.put("PID",processInfo.getPid());
                Log.Info(Storage.getString("PID"));
                return true;
            }
        }
        return false;
    }

public static void killProcess(Integer pid){
    boolean success = JProcesses.killProcess(pid).isSuccess();
    if (success)
        Log.Info("Порцесс "+pid +" завершен");
    else Log.Info("Порцесс "+pid +" НЕ ЗАВЕРШЕН");

}


    public static boolean startService(String fullCommand) throws Exception {
     Log.Info("------ Запуск сервиса приложения -------");
        if (AppStart.isProcessStart(FULL_COMMAND_RUN_APPLICATION)) {
            Log.Info("Процесс" + fullCommand + " уже ЗАПУЩЕН");
            Log.Info("PID процесса" + Storage.getString("PID"));
            return true;
        }

        ProcessBuilder processBuilder = new ProcessBuilder("cmd", "/C", "/Project/runYotaApplication.bat");
        Process process = processBuilder.start();

        if (AppStart.isProcessStart(FULL_COMMAND_RUN_APPLICATION)) {
            Log.Info("Процесс" + fullCommand + " успешно ЗАПУЩЕН");
            Log.Info("PID процесса" + Storage.getString("PID"));

        }
        else {
            Log.Info("Процесс" + fullCommand + " не удалось запустить");
             return false;
        }

       /* int currentCount = countProcessRun("java");

        ProcessBuilder processBuilder = new ProcessBuilder("cmd", "/C", "/Project/runYotaApplication.bat");
        Process process = processBuilder.start();
        int newCount = countProcessRun("java");
       if ((newCount - currentCount)==1) {
       Log.Info("Сервис Yota запущен");
           return true;
       }
           else
       {
           Log.Info("Сервис не запущен");
           return false;
       }*/
    return true;
    }




}
