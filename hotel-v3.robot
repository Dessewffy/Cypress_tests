*** Settings ***
# Use Selenium WebDriver and Applitools Eyes.
Library     SeleniumLibrary
Library     EyesLibrary       runner=web_ufg    config=applitools.yaml

# Declare setup and teardown routines.
Test Setup        Setup
Test Teardown     Teardown


*** Keywords ***
# For setup, load the demo site's login page and open Eyes to start visual testing.
Setup
    Open Browser    http://hotel-v3.progmasters.hu   headlesschrome
    Eyes Open

# For teardown, close Eyes and the browser.
Teardown
    Eyes Close Async
    Close All Browsers


*** Test Cases ***
# Login

Log into account
    Click Button      //*[@id="navbar"]/ul/li[2]/a
    # Verify the full login page loaded correctly.
    Eyes Check Window    Login Page     Fully

    # Perform login.
    Input Text        //*[@id="email"]   hogap65094@zamaneta.com
    Input Text        //*[@id="password"]   1234
    Click Element     //*[@id="loginMember"]/div[3]/div/button

    # Verify the full main page loaded correctly.
    # This snapshot uses LAYOUT match level to avoid differences in closing time text.
    Eyes Check Window    Main Page    Fully    Match Level  LAYOUT