require.config({
  baseUrl: 'js',
  map: {
    '*': {
      'css': 'lib/css.min'
    }
  },
  shim: {
    app: {
      deps: ['angular','css!style/style','bootstrap','spreadit','d3.layout.cloud']
    },
    spreadit: {
      deps: ['lodash','angular','xlsx','papaparse','css!style/lib/spreadit']
    },
    bootstrap: {
      deps: ['jquery','css!style/lib/bootstrap.min']
    },
    'd3.layout.cloud' : { // not native require
      deps: ['d3']
    }
  },
  paths: {
    app: 'app',
    style: '../css',
    angular: [
      'lib/angular.min' //load this
    ],
    lodash: [
      'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.2/lodash.min',
      'lib/lodash.min'
    ],
    xlsx: [
      'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.min',
      'lib/xlsx.full.min'
    ],
    papaparse: [
      'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.min',
      'lib/papaparse.min'
    ],
    spreadit: [
      'lib/spreadit'
    ],
    bootstrap: [
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
      'lib/bootstrap.min'
    ],
    jquery: [
      'https://code.jquery.com/jquery-2.2.3.min',
      'lib/jquery.min'
    ],
    d3: [
      'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min',
      'lib/d3.min'
    ],
    'd3.layout.cloud': [
      'lib/d3.layout.cloud'
    ]
  } 
});

require(['app'], function() {
  angular.bootstrap(document, ['app']);
});