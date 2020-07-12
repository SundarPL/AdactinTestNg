package org.objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Login_Page_Objects {
	@FindBy(id="username")
	public static WebElement usernname;
	@FindBy(id="password")
	public static WebElement password;
	@FindBy(id="login")
	public static WebElement login;

}
