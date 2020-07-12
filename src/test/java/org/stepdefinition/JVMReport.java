package org.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	public static void generateJVMReports(String json) {
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\JVMReports");
		Configuration configuration=new Configuration(f, "Adactin Hotel Room Booking");
		configuration.addClassifications("OS", "Windows");
		configuration.addClassifications("Browser", "GoogleChrome");
		configuration.addClassifications("Chrome_Version", "83.0.4103.61");
		
		List<String> list=new ArrayList<String>();
		list.add(json);
		
		ReportBuilder reportBuilder=new ReportBuilder(list, configuration);
		reportBuilder.generateReports();
		
	}

}
