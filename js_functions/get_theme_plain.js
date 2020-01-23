function get_theme_plain() {

    /*By Filippos*/
    /*Last edit Jan 2020*/
    /*This is a canvas/plain function for getting the theme (if any)    */
    /*Previously selected by the user                                   */
    /*Canvas/plain: The simplest version, other html files have more    */
    /*involed versions of this function.                                */

    const theme = localStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("btn_dark_mode").innerHTML = "/Light Mode";
        /*document.getElementById("test_theme").innerHTML = "it is white";*/
    };

    /*Else do nothing since the default is white
    else {
        document.getElementById("test_theme").innerHTML = "it is white";
    };
    */
};