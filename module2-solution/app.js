var toBuy = [
    {
        name: 'Cookies',
        quantity: '10'
    },
    {
        name: 'Pastries',
        quantity: '10'
    },
    {
        name: 'Chips',
        quantity: '2'
    },
    {
        name: 'Coke',
        quantity: '3'
    },
    {
        name: 'Sanitizer',
        quantity: '5'
    }
];

var boughtItemsEmpty = true;

(function(){

    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService ){
        $scope.toBuy = toBuy;
        $scope.itemBought = function(index){
            $scope.toBuy = ShoppingListCheckOffService.boughtItem($scope.toBuy, index);
            $scope.toBuyEmpty = $scope.toBuy.length === 0 ? true : false;
        }

    }

    AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService ){
        var alreadyBgtCtrl = this;
        alreadyBgtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var items = [];
        var itemBoughtEmpty = true;
        service.boughtItem = function (toBuyArray, index) {
            items.push(toBuyArray[index]);
            itemBoughtEmpty = false;
            toBuyArray.splice(index, 1);
            return toBuyArray;
        };
        service.getBoughtItems = function(){
            return items;
        }

    }
})();