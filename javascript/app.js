(function(angular) {

'use strict';

angular.module('myApp', ['ngSanitize'])

  .controller('mainCtrl', ['$scope', function($scope) {

    $scope.who = "Hi, I'm Adrian & build products. Co-author of <a href='http://www.cavallioti.ro/carte_detalii.php?carte_id=89&categorie_id=13'>@Probleme Alese.</a>";

    $scope.founded = "Founded <a target='_clean' href='http://thinkphp.ro'>@thinkphp</a>. I'm currently <a target='_clean' href='http://thinkphp.github.com'>programming</a>, <a target='_clean' href='http://lastfm.thinkphp.ro'>scrobbling</a>, <a target='_clean' href='http://instagram.com/thinkphp' target='_clean'>taking pictures</a>, <a target='_clean' href='https://www.chess.com/members/view/thinkphp'>playing chess.</a>";

    $scope.endomondo = "Athlete on <a target='_clean' href='http://strava.com/athletes/thinkphp'>Strava</a>";

    $scope.working = "I work at <a target='_clean' href='http://thinkphp.ro'>thinkphp</a>";

    $scope.icons = [{"hrefLink":"https://twitter.com/thinkphp","classLink":"twitter"},
                    {"hrefLink":"https://github.com/thinkphp","classLink":"github"},
                    {"hrefLink":"https://www.linkedin.com/in/statescuadrian","classLink":"linkedin"},
                    {"hrefLink":"https://www.xing.com/profile/Adrian_Statescu","classLink":"xing"},
                    {"hrefLink":"http://thinkphp.ro/+","classLink":"googleplus"},
                    {"hrefLink":"https://medium.com/@thinkphp","classLink": "medium"},
                    {"hrefLink":"http://thinkphp.ro/apps/lastfm/php/3d-library/","classLink": "lastfm"},
                    {"hrefLink":"http://instagram.com/thinkphp","classLink": "instagram"},
                    {"hrefLink":"https://ro.pinterest.com/peakuhuru","classLink": "pinterest"}] 

    $scope.email = "mergesortv@gmail.com";

    $scope.angularjs = "<b>AngularJS</b> <a href='http://thinkphp.ro/apps/AngularJS/ng-todo/ng-todo.html'>1</a>" + 

                       " <a href='http://thinkphp.ro/apps/AngularJS/ng-instagram/ng-instagram.html'>2</a>" + 

                       " <a href='http://thinkphp.github.io/ng-contact-manager'>3</a>" +

                       " <a href='http://thinkphp.github.io/ng-instagram-hashtag/'>4</a>" +

                       " <a href='http://thinkphp.github.io/ng-flickr/'>5</a>"

       $scope.reactjs = "<b>ReactJS</b> <a href='http://thinkphp.ro/apps/React/react-flickr/'>1</a> <a href='http://thinkphp.github.io/react-todos/'>2</a>"

    $scope.backbonejs = "<b>BackboneJS</b> <a href='http://thinkphp.github.io/backbone-flickr/'>1</a>" 

    $scope.knockoutjs = "<b>KnockoutJS</b> <a href='http://thinkphp.github.io/knockout-flickr/'>1</a>" + 

                        " <a href='http://thinkphp.github.io/knockout-flickr/search.html'>2</a>"

    $scope.emberjs = "<b>EmberJS</b> <a href='http://thinkphp.github.io/ember-todos/'>1</a>"

  }]);

})(window.angular);