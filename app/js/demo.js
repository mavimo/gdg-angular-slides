'use strict';

function getGdgList($scope) {
  $scope.gdgs = [
    {
      name: "GDG Milan ",
      members: 92
    },
    {
      name: "GDG Barcelona ",
      members: 228
    },
    {
      name: "GDG Silicon Valley",
      members: 171
    },
    {
      name: "GDG Stockholm ",
      members: 119
    },
    {
      name: "GDG Herzeliya ",
      members: 140
    },
    {
      name: "GDG Ahmedabad ",
      members: 78
    },
    {
      name: "GDG Lagos ",
      members: 115
    },
    {
      name: "GDG Bangalore ",
      members: 109
    },
    {
      name: "GDG Lima",
      members: 175
    },
    {
      name: "GDG L-Ab",
      members: 77
    }
  ];

  return $scope;
}

function getTweets($scope, $http) {
  var search = 'gdg';
  var url = 'http://search.twitter.com/search.json?q=' + search;
  $http({ method: 'GET', url: url }).
    success(function(data, status, headers, config) {
      $scope.tweets = data.results;
    }).
    error(function(data, status, headers, config) {
      console.log('Error: fetch tweets');
      $scope.tweets = {};
    });

  return $scope;
}
