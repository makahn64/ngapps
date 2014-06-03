/**
 * This is the main controller for the app and does all the real work of switching screens, etc.
 *

 */

app.controller("page3Controller", function($scope){

    $scope.pageName = "Where do you find to be the easiest place to have awkward conversations?";
    $scope.locationChoices = [
        "At Home",
        "In the Kitchen",
        "On Vacation",
        "At a Restaurant",
        "At a Bar",
        "At Work",
        "In the Car",
        "At a Park/Outside" ];

});
