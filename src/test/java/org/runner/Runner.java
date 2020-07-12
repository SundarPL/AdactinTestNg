package org.runner;

import org.stepdefinition.JVMReport;
import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/features/", monochrome = true, glue = "org.stepdefinition", dryRun = false, plugin = {
		"html:src\\test\\resources\\Report\\HtmlReports", "json:src\\test\\resources\\Report\\JsonReports\\Report.json",
		"junit:src\\test\\resources\\Report\\XMLReport\\Report.xml", "rerun:target\\Rerun\\rerun.txt" })

public class Runner extends AbstractTestNGCucumberTests {
	@AfterClass
	public static void JvmReports() {
		JVMReport.generateJVMReports("src\\test\\resources\\Report\\JsonReports\\Report.json");

	}

}
