function fun_mode_button_plain() {

    /*By Filippos*/
    /*Last edit Jan 2020*/
    /*This is a canvas/plain function for getting the theme (if any)    */
    /*Previously selected by the user                                   */
    /*Canvas/plain: The simplest version (vanilla), other html files    */
    /*have more involed versions of this function.      
    
    It does:
    > Removes the focous from the button after click without affecting accesibility
    > Switch the mode (A. change button text / B. set attribute / C. save in local storage 
    */

    document.activeElement.blur();

    let currentMode = document.documentElement.getAttribute('data-theme');

    if (currentMode === "dark") {
        document.getElementById("btn_dark_mode").innerHTML = "/Dark Mode";
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
    } else {
        document.getElementById("btn_dark_mode").innerHTML = "/Light Mode";
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
    };

};