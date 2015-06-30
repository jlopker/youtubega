'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http',
    function($scope, $http) {

        $scope.search = function(){
            
            if ( typeof $scope.keyword === 'undefined' || $scope.keyword === ''){
              
              $scope.error = 'No videos';
              $scope.videos = null;
              
          } else {
              
              $scope.error = null;
              
              $http.get('https://www.googleapis.com/youtube/v3/search',{
                  params: {
                    key: 'AIzaSyACTxZmBK4_-UBqoxKzojXgmPZkTNWP5U8',
                    type: 'video',
                    maxResults : '12',
                    part: 'id, snippet',
                    fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                    q: $scope.keyword
                }
            })
              .success( function (data) {
                  $scope.keyword = '';
                  $scope.videos = data.items;
              })
              .error( function (){
                  $scope.keyword = '';
              });
              
          }
          
      };
  }
  ]);