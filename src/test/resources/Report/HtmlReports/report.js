$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AdactinMasterCard.feature");
formatter.feature({
  "name": "To validate the Adactin login Funtionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "SSRajaPalani",
        "Sundar"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_fill_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_Click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin search hotel page with give the mandatory info to book the hotels",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Loaction_and_hotel_and_Room_Type_and_Numbers_of_rooms_and_Check_in_date_and_Check_out_date_and_Adult_per_room_and_Childern_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin select hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Select hotel",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_Select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"\u003cCredit card type\u003e\" Expirydate and CVV Number",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ]
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Credit card type"
      ]
    },
    {
      "cells": [
        "Master Card"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"Master Card\" Expirydate and CVV Number",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Firstname_and_Lastname_and_Billingaddress_and_Credit_card_no_and_Expirydate_and_CVV_Number(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_BookingConfirm_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat org.stepdefinition.Adactin_Login.user_is_navigating_to_BookingConfirm_page(Adactin_Login.java:170)\r\n\tat ✽.User is navigating to BookingConfirm page(src/test/resources/features/AdactinMasterCard.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin Booking Cofirm page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Booking Cofirm page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Booking_Cofirm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the booking confirmation order no",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_get_the_booking_confirmation_order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is booking the room is done!!!",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_booking_the_room_is_done()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/AdactinOtherCard.feature");
formatter.feature({
  "name": "To validate the Adactin login Funtionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "SSRajaPalani",
        "Sundar"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_fill_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_Click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin search hotel page with give the mandatory info to book the hotels",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Loaction_and_hotel_and_Room_Type_and_Numbers_of_rooms_and_Check_in_date_and_Check_out_date_and_Adult_per_room_and_Childern_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin select hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Select hotel",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_Select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"\u003cCredit card type\u003e\" Expirydate and CVV Number",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ]
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Credit card type"
      ]
    },
    {
      "cells": [
        "Others"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"Others\" Expirydate and CVV Number",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Firstname_and_Lastname_and_Billingaddress_and_Credit_card_no_and_Expirydate_and_CVV_Number(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_BookingConfirm_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat org.stepdefinition.Adactin_Login.user_is_navigating_to_BookingConfirm_page(Adactin_Login.java:170)\r\n\tat ✽.User is navigating to BookingConfirm page(src/test/resources/features/AdactinOtherCard.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin Booking Cofirm page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Booking Cofirm page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Booking_Cofirm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the booking confirmation order no",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_get_the_booking_confirmation_order_no()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dorder_no\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANUSH\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.Adactin_Login.user_get_the_booking_confirmation_order_no(Adactin_Login.java:183)\r\n\tat ✽.User get the booking confirmation order no(src/test/resources/features/AdactinOtherCard.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User is booking the room is done!!!",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_booking_the_room_is_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANUSH\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.14 (be04594a2b841..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51538}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d1d8ec1f6d8053f045cca7999e6b97a4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat org.stepdefinition.HooksClass.afterScenarios(HooksClass.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/features/AdactinVisa.feature");
formatter.feature({
  "name": "To validate the Adactin login Funtionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "SSRajaPalani",
        "Sundar"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_fill_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_Click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin search hotel page with give the mandatory info to book the hotels",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Loaction_and_hotel_and_Room_Type_and_Numbers_of_rooms_and_Check_in_date_and_Check_out_date_and_Adult_per_room_and_Childern_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin select hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Select hotel",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_Select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"\u003cCredit card type\u003e\" Expirydate and CVV Number",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ]
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Credit card type"
      ]
    },
    {
      "cells": [
        "VISA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"VISA\" Expirydate and CVV Number",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Firstname_and_Lastname_and_Billingaddress_and_Credit_card_no_and_Expirydate_and_CVV_Number(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_BookingConfirm_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat org.stepdefinition.Adactin_Login.user_is_navigating_to_BookingConfirm_page(Adactin_Login.java:170)\r\n\tat ✽.User is navigating to BookingConfirm page(src/test/resources/features/AdactinVisa.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin Booking Cofirm page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Booking Cofirm page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Booking_Cofirm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the booking confirmation order no",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_get_the_booking_confirmation_order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is booking the room is done!!!",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_booking_the_room_is_done()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Adactin_Login_Page.feature");
formatter.feature({
  "name": "To validate the Adactin login Funtionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "SSRajaPalani",
        "Sundar"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_fill_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_Click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin search hotel page with give the mandatory info to book the hotels",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Loaction_and_hotel_and_Room_Type_and_Numbers_of_rooms_and_Check_in_date_and_Check_out_date_and_Adult_per_room_and_Childern_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin select hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Select hotel",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_Select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"\u003cCredit card type\u003e\" Expirydate and CVV Number",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ]
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Credit card type"
      ]
    },
    {
      "cells": [
        "American Express"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and \"American Express\" Expirydate and CVV Number",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Firstname_and_Lastname_and_Billingaddress_and_Credit_card_no_and_Expirydate_and_CVV_Number(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_BookingConfirm_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat org.stepdefinition.Adactin_Login.user_is_navigating_to_BookingConfirm_page(Adactin_Login.java:170)\r\n\tat ✽.User is navigating to BookingConfirm page(src/test/resources/features/Adactin_Login_Page.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin Booking Cofirm page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Booking Cofirm page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Booking_Cofirm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the booking confirmation order no",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_get_the_booking_confirmation_order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is booking the room is done!!!",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_booking_the_room_is_done()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});