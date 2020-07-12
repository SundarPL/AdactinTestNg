package org.base;

import java.net.MalformedURLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class BaseClass {
	public static WebDriver driver;
	public static final String USERNAME = "sundarpalani1";
	public static final String AUTOMATE_KEY = "2RnCKUkyuQJp8dLHG5tB";
	public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
	public static void browserStack() throws Throwable {
		
		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability("browser", "Chrome");
		caps.setCapability("browser_version", "84.0 beta");
		caps.setCapability("os", "Windows");
		caps.setCapability("os_version", "8");
		caps.setCapability("resolution", "1024x768");
		caps.setCapability("name", "Bstack-[Java] Sample Test");

		driver = new RemoteWebDriver(new java.net.URL(URL), caps);

	}

}
