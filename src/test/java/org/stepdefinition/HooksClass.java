package org.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class HooksClass {

	@Before
	public void beforeScenario() throws Throwable {
		
		System.out.println("Hooks Started...");
		
	}

	@After
	public void afterScenarios(Scenario scenario) throws IOException {
		Date d = new Date();
		SimpleDateFormat sd = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
		String format = sd.format(d);
		String date = format.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "");
		TakesScreenshot ts = (TakesScreenshot) Adactin_Login.driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File dest = new File(System.getProperty("user.dir") + "\\target\\Screenshots" + date + ".png");
		FileUtils.copyFile(src, dest);
		if (scenario.isFailed()) {
			byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotAs, "image/png");
		}
		System.out.println("Hooks End...");

	}

}
