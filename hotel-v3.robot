*** Settings ***
# Use Selenium WebDriver and Applitools Eyes.
Library     SeleniumLibrary
Library     EyesLibrary       runner=web_ufg    config=applitools.yaml

# Declare setup and teardown routines.
Test Setup        Setup
Test Teardown     Teardown

*** Variables ***
#Declare variables and lists.
${LOGIN-BUTTON}   //*[@id="navbar"]/ul/li[2]/a
@{LOGIN-Credentials-GUEST}   hogap65094@zamaneta.com   1234
*** Keywords ***
# For setup, load the site main page and open Eyes to start visual testing.
Setup
    Open Browser    http://hotel-v3.progmasters.hu   headlesschrome
    Eyes Open

# For teardown, close Eyes and the browser.
Teardown
    Eyes Close Async
    Close All Browsers


*** Test Cases ***
# Login-guest

Log into guest account
    Click Element      ${LOGIN-BUTTON}
    # Verify the full login page loaded correctly.
    Eyes Check Window    Login Page     Fully

    # Perform login.
    Input Text        //*[@id="email"]   ${LOGIN-Credentials-GUEST}[0]
    Input Text        //*[@id="password"]   ${LOGIN-Credentials-GUEST}[1]
    Click Element     //*[@id="loginMember"]/div[3]/div/button

    # Verify the full main page loaded correctly.
    # This snapshot uses LAYOUT match level to avoid differences in closing time text.
    Eyes Check Window    Main Page    Fully    Match Level  LAYOUT