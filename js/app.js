define(function() {

  angular.module('app',['bg.spreadit']);

  angular.module('app').controller('AppController', AppController);

  AppController.$inject = ['$scope'];

  function AppController($scope) {

      var vm = this;

      vm.onChange = function(data, file) {
        vm.data = data;
        vm.columns = [];
        for( item in vm.data ) {
          vm.columns.push(item);
        }
        console.log(vm.columns);

      };

      vm.columns = [
        // matches becasue of title
        {
            title: 'Email',
            property: 'emailAddress'
        },
        // matches because of property
        {
            title: 'Last Name',
            property: 'last_name'
        },
        // matches because of alias
        {
            title: 'First Name',
            property: 'firstName',
            aliases: ['first_name', 'first']
        }
      ]
  };
  
});