require.config({
  baseUrl: 'js',
  paths: {
    angular: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min', //first load this else (whìtout .js)
      'lib/angular.min' //load this
    ],
    lodash: [
      'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.2/lodash.min.js'
    ]
  } 
};