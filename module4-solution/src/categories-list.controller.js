(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesListController', CategoriesListController);

    CategoriesListController.$inject = ['MenuDataService'];
    function CategoriesListController(MenuDataService){
        var categoriesList = this;
        categoriesList.items = [];
        var promise = MenuDataService.getCategories();
        promise.then(function(response){
            categoriesList.items = response.data;
        });

        categoriesList.callShortNameDetails = function(shortName){
            
            promise =  MenuDataService.getItemsForCategory(shortName);
            promise.then(function(response){
                console.log(shortName);
                console.log(MenuDataService.setShortName(response.data.menu_items));
                // MenuDataService.shortNamesList = response.data.menu_items;
                // console.log(MenuDataService.shortNamesList);
                // console.log(response.data.menu_items);
            });
        }
    }
})();