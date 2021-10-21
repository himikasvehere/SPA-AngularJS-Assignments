(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('ItemController', ItemController);

    ItemController.$inject = ['MenuDataService'];
    function ItemController(MenuDataService){
        var itemCtrl = this;
        itemCtrl.items = [];
        itemCtrl.getItems = function(){
            console.log(MenuDataService.getShortName());
            itemCtrl.allShortNames = MenuDataService.getShortName();
        } 
        // MenuDataService.getShortName();
        // console.log(itemCtrl.items);
    }
})();