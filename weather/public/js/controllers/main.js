angular.module('mirrorController', []).controller('mainController', ['$scope','$http', 'socket', 'moment', '$q', 'clientId', function($scope, $http, socket, moment, $q, clientId) {

    $scope.weather = {};

    var formatWeatherData = function(weatherData) {
      $scope.weather = weatherData;
      console.log($scope.weather);
    };

    // weather feed ===============================================================
  var getWeather = function() {
    $http({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=West%20Chester,PA&appid='+clientId+'&units=imperial',
      method: 'GET'
    }).then(function successCallback(response) {
        formatWeatherData(response.data);
      }, function errorCallback(response) {
        console.log('error', response);
      });
  };

  var getNews = function() {

    var addNews = function(newsItem, index) {
      topNewsCache[index] = {title: newsItem.title, contentSnippet: newsItem.contentSnippet, publishedDate: newsItem.publishedDate, content: newsItem.content};
    };

    $http({
      url: 'http://feeds.reuters.com/reuters/topNews',
      method: 'GET'
    }).then(function successCallback(response) {
        console.log(response);
        // angular.forEach(topNewsFeed, function(items, key) {
        //   // items.forEach(addNews);
        //   angular.forEach(items, addNews(items));
        // });
        // console.log(topNewsCache);
      }, function errorCallback(response) {
        console.log('error', response);
      });

  };

  getWeather();
  getNews();

	}])
  .factory('clientId', function clientIdFactory() {
    return 'aa0db56eb7a3c08c9040e72966b27cd6';
  });