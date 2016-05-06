define(['d3.layout.cloud'], function(d3Cloud) {
  angular.module('app',['bg.spreadit']);

  angular.module('app').controller('AppController', AppController);

  AppController.$inject = ['$scope'];

  function AppController($scope) {

      var vm = this;

      vm.onChange = function(data, file) {
        vm.data = data;
        var words = [];
        for( item in vm.data[0] ) {
          words.push(item);
        }
        var tag = new TagClouds("#tagChart", words);
        tag.create();
      };


  };

  var TagClouds = function (element, words) {
    var element = element;
    var words = words;

    this.create = function() {
      layout.start();
    };

    d3.select(window).on('resize', function () {
      console.log("provas");
    });

    var fill = d3.scale.category20();

    var layout = d3Cloud()
     .size([500, 500])
     .words(words.map(function(d) {
       return {text: d, size: 10 + Math.random() * 90, test: "haha"};
      }))
     .padding(5)
     .rotate(function() { return ~~(Math.random() * 2) * 90; })
     .font("Impact")
     .fontSize(function(d) { return d.size; })
     .on("end", draw);

    function draw(words) {
      d3.select(element).append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
          .data(words)
          .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
    }
  };
  
});