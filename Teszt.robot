*** Settings ***
Library           Selenium2Library


*** Test Cases ***
Open browser
    Open Browser    https://www.mikrosat.hu    chrome    options=add_experimental_option("detach", True)
    Click Element    //*[@id="container"]/header/div/div/div[2]/div/div[2]/div[3]
    Input text    //*[@id="shop_user_login"]    zaramoth@citromail.hu
    Input password    //*[@id="shop_pass_login"]    Beni1996
    click button    //*[@id="container"]/header/div/div/div[2]/div/div[2]/div[3]/div/div[2]/form/div[1]/button
    click button    //*[@id="profile__btn"]
    Capture Page Screenshot
    Close browser

Order from webshop
    open browser    https://bookline.hu    Chrome    options=add_experimental_option("detach", True)
    click button    //*[@id="onetrust-accept-btn-handler"]
    click element    //*[@id="header"]/div/div/div[1]/div[3]/div/div[1]/nav/a[2]
    input text    //*[@name="username"]    kuruczbarnabas@gmail.hu
    input password    //*[@name="password"]    Heroes65
    click button    //*[@id="login-dropdown"]/div/form/div/div/div[3]/button
    Capture Page screenshot
    click element    //*[@id="category-tags"]/div/a
    click element    //*[@id="megamenu-dropdown"]/div/nav/a[12]
    click element    //a[contains(text(), "Politika ›")]
    