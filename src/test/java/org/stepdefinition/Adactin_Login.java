package org.stepdefinition;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.base.BaseClass;
import org.objects.Book_Hotel_Page;
import org.objects.Login_Page_Objects;
import org.objects.Search_Page_Objects;
import org.objects.Select_Hotel_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Adactin_Login extends BaseClass {

	public Select s;
	Actions a;
	String orderNo;
	String text;

	@Given("User has to be there in Adactin home page")
	public void user_has_to_be_there_in_Adactin_home_page() throws Throwable {
		// browserStack();
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\USER\\eclipse-workspace\\AdadctinTestNg\\Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://adactinhotelapp.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.MINUTES);
	}

	@When("User has to fill username and password")
	public void user_has_to_fill_username_and_password(io.cucumber.datatable.DataTable data) {
		PageFactory.initElements(driver, Login_Page_Objects.class);
		List<Map<String, String>> map = data.asMaps();
		Login_Page_Objects.usernname.sendKeys(map.get(0).get("username"));
		Login_Page_Objects.password.sendKeys(map.get(0).get("password"));
	}

	@When("User Click the Login button")
	public void user_Click_the_Login_button() {
		Login_Page_Objects.login.click();
	}

	@Then("User has to be there in Adactin search hotel page")
	public void user_has_to_be_there_in_Adactin_search_hotel_page() {
		Assert.assertTrue(driver.getCurrentUrl().contains("SearchHotel"));

	}

	@Given("User has to be there in Adactin search hotel")
	public void user_has_to_be_there_in_Adactin_search_hotel() {
		driver.get("http://adactinhotelapp.com/SearchHotel.php");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.MINUTES);
	}

	@When("User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room")
	public void user_has_to_enter_Loaction_and_hotel_and_Room_Type_and_Numbers_of_rooms_and_Check_in_date_and_Check_out_date_and_Adult_per_room_and_Childern_per_room()
			throws InterruptedException {

		PageFactory.initElements(driver, Search_Page_Objects.class);
		s = new Select(Search_Page_Objects.location);
		s.selectByVisibleText("Sydney");
		s = new Select(Search_Page_Objects.hotels);
		s.selectByVisibleText("Hotel Creek");
		s = new Select(Search_Page_Objects.room_type);
		s.selectByVisibleText("Standard");
		s = new Select(Search_Page_Objects.room_nos);
		s.selectByValue("2");
		Search_Page_Objects.datepick_in.sendKeys("18/06/2020");
		Search_Page_Objects.datepick_out.sendKeys("20/06/2020");
		s = new Select(Search_Page_Objects.adult_room);
		s.selectByValue("2");
		s = new Select(Search_Page_Objects.child_room);
		s.selectByValue("2");
	}

	@When("User click the search button")
	public void user_click_the_search_button() {
		Search_Page_Objects.submit.click();
	}

	@Then("User is navigating to Booking confirmation page")
	public void user_is_navigating_to_Booking_confirmation_page() {
		Assert.assertTrue(driver.getCurrentUrl().contains("SelectHotel"));

	}

	@Given("User has to be there in Adactin select hotel page")
	public void user_has_to_be_there_in_Adactin_select_hotel_page() throws InterruptedException {
		driver.get("http://adactinhotelapp.com/SelectHotel.php");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.MINUTES);
	}

	@When("User click the Select hotel")
	public void user_click_the_Select_hotel() {
		PageFactory.initElements(driver, Select_Hotel_Page.class);
		Select_Hotel_Page.selectHotel.click();

	}

	@When("User click the continue button")
	public void user_click_the_continue_button() {
		Select_Hotel_Page.continueButton.click();
	}

	@Then("User is navigating to Book hotel page")
	public void user_is_navigating_to_Book_hotel_page() throws InterruptedException {
		Assert.assertTrue(driver.getCurrentUrl().contains("BookHotel"));
	}

	@Given("User has to be there in Adactin Book hotel page")
	public void user_has_to_be_there_in_Adactin_Book_hotel_page() {
		// driver.get("http://adactinhotelapp.com/BookHotel.php");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.MINUTES);

	}

	@When("User has to enter Firstname and Lastname and Billingaddress and Credit card no and {string} Expirydate and CVV Number")
	public void user_has_to_enter_Firstname_and_Lastname_and_Billingaddress_and_Credit_card_no_and_Expirydate_and_CVV_Number(
			String string, io.cucumber.datatable.DataTable data) {

		PageFactory.initElements(driver, Book_Hotel_Page.class);
		List<Map<String, String>> map = data.asMaps();
		Book_Hotel_Page.firstName.sendKeys(map.get(0).get("Firstname"));
		Book_Hotel_Page.lastName.sendKeys(map.get(0).get("Lastname"));
		Book_Hotel_Page.address.sendKeys(map.get(0).get("Billing Address"));
		Book_Hotel_Page.cc_Num.sendKeys(map.get(0).get("Credit card no"));
		s = new Select(Book_Hotel_Page.cc_Type);
		List<WebElement> options = s.getOptions();
		for (WebElement webElement : options) {
			text = webElement.getText();
			System.out.println(text);
			if (text.equalsIgnoreCase(string)) {
				s.selectByVisibleText(text);
			}
		}
		

		s = new Select(Book_Hotel_Page.cc_Exp_Month);
		s.selectByVisibleText("May");
		s = new Select(Book_Hotel_Page.cc_Exp_Year);
		s.selectByVisibleText("2015");
		Book_Hotel_Page.cc_CVV.sendKeys(map.get(0).get("CVV Number"));
	}

	@When("User click the BookNow button")
	public void user_click_the_BookNow_button() {
		Book_Hotel_Page.book_Now.click();
	}

	@Then("User is navigating to BookingConfirm page")
	public void user_is_navigating_to_BookingConfirm_page() {
		Assert.assertTrue(driver.getTitle().contains("Hotel Booking Confirmation"));

	}

	@Given("User has to be there in Adactin Booking Cofirm page")
	public void user_has_to_be_there_in_Adactin_Booking_Cofirm_page() {
		// driver.get("http://adactinhotelapp.com/BookingConfirm.php");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.MINUTES);
	}

	@When("User get the booking confirmation order no")
	public void user_get_the_booking_confirmation_order_no() {
		orderNo = driver.findElement(By.id("order_no")).getAttribute("value");
	}

	@Then("User is booking the room is done!!!")
	public void user_is_booking_the_room_is_done() {
		a = new Actions(driver);
		a.moveToElement(driver.findElement(By.xpath("//td[contains(text(),'Order No.')]"))).build().perform();
		System.out.println("Order No is " + orderNo);
		System.out.println("Booking is Done!!!");
	}

}
