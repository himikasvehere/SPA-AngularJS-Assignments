(function(){


    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/tab1');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl : 'src/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl : 'src/templates/categories.template.html',
                controller: 'CategoriesListController as categoriesList',
                // resolve: {
                //     items: ['MenuDataService', function(MenuDataService){
                //         return MenuDataService.getAllCategories();
                //     }]
                // }
            })
            .state('items', {
                url: '/items',
                templateUrl : 'src/templates/items.template.html',
                controller: 'ItemController as itemCtrl',
            });
    }
})();