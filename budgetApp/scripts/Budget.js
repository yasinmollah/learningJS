/* 
    For this project, we need to create three module to perform the app perfectly.
    The planned modules and their purpose are mentioned below.
    1--> Data Module :: This Module is created for manipulating core information about the app.
    2--> UI Module :: This Module is created for manipulating the UI information.
    3--> Controller Module :: This module is created for make sure the handshaking between previous two modules.
*/

//Creating Data Module
var dataModule = (function () {
    //Code for this Module
})();

//Creating UI Module
var UIModule = (function () {
    //Code for this module
})();
    
//Creating Controller Module
var controllerModule = (function (dataCtrl, UICtrl) {
    //Code for this module
})(dataModule, UIModule);
