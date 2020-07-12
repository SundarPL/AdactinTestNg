Feature: To validate the Adactin login Funtionality

  Scenario: To validate the Adactin login with valid credentials
    Given User has to be there in Adactin home page
    When User has to fill username and password
      | username     | password |
      | SSRajaPalani | Sundar   |
    And User Click the Login button
    Then User has to be there in Adactin search hotel page

  Scenario: To validate the Adactin search hotel page with give the mandatory info to book the hotels
    Given User has to be there in Adactin search hotel page
    When User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room
    And User click the search button
    Then User is navigating to Booking confirmation page

  Scenario: To validate the Adactin select hotel page
    Given User has to be there in Adactin select hotel page
    When User click the Select hotel
    And User click the continue button
    Then User is navigating to Book hotel page

  Scenario Outline: To validate the Adactin Book hotel page
    Given User has to be there in Adactin Book hotel page
    When User has to enter Firstname and Lastname and Billingaddress and Credit card no and "<Credit card type>" Expirydate and CVV Number
      | Firstname | Lastname | Billing Address | Credit card no   | CVV Number |
      | SSRAJA    | Palani   | 123,Abc New St  | 8945698745631112 |        951 |
    And User click the BookNow button
    Then User is navigating to BookingConfirm page

    Examples: 
      | Credit card type |
      | VISA             |

  Scenario: To validate the Adactin Booking Cofirm page
    Given User has to be there in Adactin Booking Cofirm page
    When User get the booking confirmation order no
    Then User is booking the room is done!!!
