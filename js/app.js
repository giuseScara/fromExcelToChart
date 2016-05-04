angular.module('demo', ['bg.spreadit']);
  
angular.module('demo').controller('DemoCtrl', DemoCtrl);

function DemoCtrl($scope) {

    this.onChange = function(data, file) {
        document.getElementById('results').value = JSON.stringify(data, null, '\t');
    };

    this.columns = [
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