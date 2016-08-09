package yota.steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Администратор on 06.08.2016.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/yota/features",
        plugin = {"json:reports/yota.json", "pretty", "html:reports"}
)
public class RunCucumberTest {
}
