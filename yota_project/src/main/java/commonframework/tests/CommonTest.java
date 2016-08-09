package main.java.commonframework.tests;

import cucumber.api.Scenario;
import main.java.commonframework.Log;

/**
 * Created by Администратор on 06.08.2016.
 */
public abstract class CommonTest {
    protected static Scenario scenario;
    protected static boolean first = true;

    public static final int TIMEOUT_DEFAULT = 90;

    protected abstract void startAndUpdate();

    public void before(Scenario _scenario) throws Exception {

        if(first){
            first = false;
            try {
                startAndUpdate();

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        scenario = _scenario;
       Log.setScenario(scenario);
    }

    public void after() throws Exception {
        if(scenario!=null && scenario.isFailed()){
           Log.Error("Сценарий завершен с ошибкой",true);
        }
        scenario = null;
         Log.clearScenario();
    }


}
