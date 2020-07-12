package org.objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Book_Hotel_Page {
	
	@FindBy(id="first_name")
	public static WebElement firstName;
	@FindBy(id="last_name")
	public static WebElement lastName;
	@FindBy(id="address")
	public static WebElement address;
	@FindBy(id="cc_num")
	public static WebElement cc_Num;
	@FindBy(id="cc_type")
	public static WebElement cc_Type;
	@FindBy(id="cc_exp_month")
	public static WebElement cc_Exp_Month;
	@FindBy(id="cc_exp_year")
	public static WebElement cc_Exp_Year;
	@FindBy(id="cc_cvv")
	public static WebElement cc_CVV;
	@FindBy(id="book_now")
	public static WebElement book_Now;
}
