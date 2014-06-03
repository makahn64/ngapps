/**
 * This is the main controller for the app and does all the real work of switching screens, etc.
 *

 */

app.controller("page2Controller", function($scope){

    $scope.pageName = "Who Do You Need to Talk To?";
    $scope.talkToChoices = [
        "Mom",
        "Dad",
        "Both Parents",
        "Brother",
        "Sister",
        "Multiple Siblings",
        "Grandmother",
        "Grandfather",
        "Multiple Grandparents",
        "Daughter",
        "Son",
        "Multiple Children",
        "Aunt or Uncle",
        "Other" ];

});
