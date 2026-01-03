function get_theme_plain() {
    /* By Filippos                                                       */
    /* Last edit Jan 2020                                                */
    /* This is a canvas/plain function for getting the theme (if any)    */
    /* previously selected by the user                                   */
    /* Plain: The simplest version (default/vanilla/canvas), other html  */
    /* files might have more involved versions of this function.         */
    /* ----------------------------------------------------------------- */

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("btn_dark_mode").innerHTML = "/Light Mode";
        /*document.getElementById("test_theme").innerHTML = "it is white";*/
    }

    /*Else do nothing since the default is white
    else {
        document.getElementById("test_theme").innerHTML = "it is white";
    };
    */
}
