function fun_mode_button_plain() {
    /* By Filippos                                                       */
    /* Last edit Jan 2020                                                */
    /* This is a canvas/plain function for the dark mode button, it:     */
    /* > Removes the focus from the button after click in order to not   */
    /*   affect accessibility                                            */
    /* > Switches the mode (A. change button text / B. set attribute /   */
    /*   C. save in local storage.)                                      */
    /* Plain: The simplest version (default/vanilla/canvas), other html  */
    /* files might have more involved versions of this function.         */
    /* ----------------------------------------------------------------- */

    document.activeElement.blur();

    let currentMode = document.documentElement.getAttribute("data-theme");

    if (currentMode === "dark") {
        document.getElementById("btn_dark_mode").innerHTML = "/Dark Mode";
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
    } else {
        document.getElementById("btn_dark_mode").innerHTML = "/Light Mode";
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
    }
}
