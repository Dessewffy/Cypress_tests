*** Settings ***
Library           Selenium2Library

*** Test Cases ***
Chrome
    [Tags]        Demo
    [Documentation]    Chrome verzió: 117.0.5938.89 (Hivatalos verzió) (64 bites)
    ...
    ...    Processzor	AMD Ryzen 5 5500U with Radeon Graphics \ \ \ \ \ \ \ \ \ \ \ 2.10 GHz
    ...    Memória mérete	16,0 GB (13,8 GB használható)
    ...    Rendszer típusa	64 bites operációs rendszer, x64-alapú processzor
    ...
    open browser    http://fundraiser-demo.progmasters.hu/login    chrome    options=add_experimental_option("detach", True)
    Input text    //*[@id="root"]/div/div/div/div/form/div[1]/input    Dessewffy
    Input password    //*[@id="root"]/div/div/div/div/form/div[2]/input    Beni1996
    click button    //*[@id="root"]/div/div/div/div/form/button[1]
    sleep    5s
    Capture Page screenshot

Edge
    [Documentation]    Edge Verzió: 117.0.2045.31 (Hivatalos build) (64 bites)
    ...
    ...    Processzor	AMD Ryzen 5 5500U with Radeon Graphics \ \ \ \ \ \ \ \ \ \ \ 2.10 GHz
    ...    Memória mérete	16,0 GB (13,8 GB használható)
    ...    Rendszer típusa	64 bites operációs rendszer, x64-alapú processzor
    open browser    http://fundraiser-demo.progmasters.hu/login    edge    options=add_experimental_option("detach", True)
    Input text    //*[@id="root"]/div/div/div/div/form/div[1]/input    Dessewffy
    Input password    //*[@id="root"]/div/div/div/div/form/div[2]/input    Beni1996
    click button    //*[@id="root"]/div/div/div/div/form/button[1]
    sleep    5s
    Capture Page screenshot

Firefox
    [Documentation]    Firefox verzió: 117.0.1 (64 bites)
    ...
    ...    Processzor	AMD Ryzen 5 5500U with Radeon Graphics \ \ \ \ \ \ \ \ \ \ \ 2.10 GHz
    ...    Memória mérete	16,0 GB (13,8 GB használható)
    ...    Rendszer típusa	64 bites operációs rendszer, x64-alapú processzor
    open browser    http://fundraiser-demo.progmasters.hu/login    firefox
    Input text    //*[@id="root"]/div/div/div/div/form/div[1]/input    Dessewffy
    Input password    //*[@id="root"]/div/div/div/div/form/div[2]/input    Beni1996
    click button    //*[@id="root"]/div/div/div/div/form/button[1]
    sleep    5s
    Capture Page screenshot
