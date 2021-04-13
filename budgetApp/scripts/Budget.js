/* 
    For this project, we need to create three module to perform the app perfectly.
    The planned modules and their purpose are mentioned below.
    1--> Data Controller Module :: This Module is created for manipulating core information about the app.
    2--> UI Controller Module :: This Module is created for manipulating the UI information.
    3--> Global Controller Module :: This module is created for make sure the handshaking between previous two modules.
*/

//Creating Data Controller Module
var dataControllerModule = (function () {
    //Code for this Module
})();

//Creating UI Controller Module
var UIControllerModule = (function () {
    //Code for this module

    //Gathering All Classes from UI
    var strDom = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputAmount: ".add__value",
        inputDate: ".add__date",
        addButton: ".add__btn",
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(strDom.inputType).value,
                description: document.querySelector(strDom.inputDescription)
                    .value,
                amount: document.querySelector(strDom.inputAmount).value,
                date: document.querySelector(strDom.inputDate).value,
            };
        },

        exportDomString: function () {
            return strDom;
        },
    };
})();

//Creating Global Controller Module
var globalControllerModule = (function (dataCtrl, UICtrl) {
    //Code for this module

    // Make Operational Function
    var setupEvents = function () {
        //Import Dom String form another Module
        var DOM = UICtrl.exportDomString();
        // Creating Event Handler for the input button
        document
            .querySelector(DOM.addButton)
            .addEventListener("click", ctrlAddItem);

        // Creating Event Handler for ENTER Button
        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                //Calling Add Item Controller
                ctrlAddItem();
            }
        });
    };

    // Creating Add Item Controller
    var ctrlAddItem = function () {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        // 2. Add the item to the Data Controller
        // 3. Add the item to the UI
        // 4. Calculate the Budget
        // 5. Display the Budget to the UI
    };

    return {
        start: function () {
            console.log("Application has started");
            return setupEvents();
        },
    };
})(dataControllerModule, UIControllerModule);

// Starting the Application
globalControllerModule.start();

