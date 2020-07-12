package org.runner;

import cucumber.api.CucumberOptions;

@CucumberOptions(features = { "@target\\Rerun\\rerun.txt" }, glue = "org.stepdefinition")
public class FailedRunner {

}
