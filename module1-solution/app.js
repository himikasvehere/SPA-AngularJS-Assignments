(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.message = ""

        $scope.checkQuantity = function(){
            var msg = $scope.message
            var items = msg.split(",")
            if(msg !== ""){
                if(items.length <= 3){
                    document.getElementById('msgDisplay').innerHTML = `<p>Enjoy!</p>`
                }
                else{
                    document.getElementById('msgDisplay').innerHTML = `<p>Too Much!</p>`
                }
            }
            else{
                document.getElementById('msgDisplay').innerHTML = `<p>Please enter data first</p>`
            }

        }
    }
})();