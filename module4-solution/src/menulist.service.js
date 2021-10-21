(function(){
    'use strict';
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var service = this;
        // service.shortNameList = []
        service.getCategories = function(){
            return $http({
                method:'GET',
                url:('https://davids-restaurant.herokuapp.com/categories.json')
            });
        }

        service.getItemsForCategory = function(shortName){
            return $http({
                method: 'GET',
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+shortName)
            });
        }

        service.setShortName = function(shortNames){
            service.shortNameList = shortNames;
            console.log(service.shortNameList);

            return 'success';
        }
        service.getShortName = function(){
            console.log(service.shortNameList);
            return service.shortNameList;
            return 'holla'
        }
    }
})();