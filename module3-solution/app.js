(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];


    function NarrowItDownController(MenuSearchService){
        var myCtrl = this;
        myCtrl.logMenuItems = function(){
            var promise = MenuSearchService.getMatchedMenuItems();
            var searchTermValue = document.getElementById('searchTerm').value;
            promise.then( function(response) {
                var data = response.data.menu_items;
                myCtrl.menu = data.filter(item => item.description.toLowerCase().includes(searchTermValue));
            })
            .catch(function(error){
                console.log('Something went wrong!');
            })
        }

    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        // service.getMatchedMenuItems = function(){
        //     var response = $http({
        //         method: 'GET',
        //         url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
        //     }).then(function(result){
        //         console.log('1')
        //         return(result.data.menu_items)
        //     })

        // }
        service.getMatchedMenuItems = function(){
        
            return $http({
                method:'GET',
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
            })
        }

    }
})();