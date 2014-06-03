/**
 * This is the main controller for the app and does all the real work of switching screens, etc.
 *

 */

app.controller("page4Controller", function($scope){

    $scope.pageName = "How do you envision having this awkward conversation?";
    $scope.howChoices = [
        "Having Coffee",
        "In Person",
        "Over the Phone",
        "During Lunch",
        "After Dinner",
        "On A Walk",
        "With A Cocktail",
        "Eating Dessert",
        "Drinking Tea"
    ];

});
