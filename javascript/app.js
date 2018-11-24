(function(angular) {

'use strict';

angular.module('myApp', ['ngSanitize'])

  .controller('mainCtrl', ['$scope', function($scope) {

    $scope.who = "Hi, I'm Adrian & build products using <a href='http://lang.thinkphp.ro'>languages</a>. Co-author of <a href='http://mybook.thinkphp.ro'>@Probleme Alese</a>.";

    $scope.enjoy = "Founded <a target='_clean' href='http://thinkphp.ro'>@thinkphp</a>. I love <a target='_clean' href='http://thinkphp.github.com'>programming</a>, <a target='_clean' href='http://thinkphp.herokuapp.com'>blogging</a>, <a target='_clean' href='http://instagram.com/thinkphp' target='_clean'>taking pictures</a>, <a target='_clean' href='http://strava.thinkphp.ro'>running</a>, <a target='_clean' href='http://lastfm.thinkphp.ro'>scrobbling</a>, <a target='_clean' href='https://www.endomondo.com/profile/30985212'>hiking</a>, <a target='_clean' href='https://www.chess.com/members/view/thinkphp'>playing chess 7933 (3860 W / 3828 L / 245 D Blitz)</a>";

    $scope.working = "I work at <a target='_clean' href='http://thinkphp.ro'>thinkphp</a>.";

    $scope.icons = [{"hrefLink":"https://twitter.com/thinkphp","classLink":"twitter"},
                    {"hrefLink":"https://github.com/thinkphp","classLink":"github"},
                    {"hrefLink":"https://www.linkedin.com/in/statescuadrian","classLink":"linkedin"},
                    {"hrefLink":"https://www.xing.com/profile/Adrian_Statescu","classLink":"xing"},
                    {"hrefLink":"http://thinkphp.ro/+","classLink":"googleplus"},
                    {"hrefLink":"https://medium.com/@thinkphp","classLink": "medium"},
                    {"hrefLink":"http://thinkphp.ro/apps/lastfm/php/3d-library/","classLink": "lastfm"}] 

    $scope.email = "mergesortv@gmail.com";

    $scope.angularjs = "<b>AngularJS</b> <a href='http://thinkphp.ro/apps/AngularJS/ng-todo/ng-todo.html'>1</a>" + 

                       " <a href='http://thinkphp.ro/apps/AngularJS/ng-instagram/ng-instagram.html'>2</a>" + 

                       " <a href='http://thinkphp.github.io/ng-contact-manager'>3</a>" +

                       " <a href='http://thinkphp.github.io/ng-instagram-hashtag/'>4</a>" +

                       " <a href='http://thinkphp.github.io/ng-flickr/'>5</a>"

       $scope.reactjs = "<b>ReactJS</b> <a href='http://thinkphp.ro/apps/React/react-flickr/'>1</a> <a href='http://thinkphp.github.io/react-todos/'>2</a>"

    $scope.backbonejs = "<b>BackboneJS</b> <a href='http://thinkphp.github.io/backbone-flickr/'>1</a>" 

    $scope.vuejs = "<b>Vuejs</b> <a href='http://thinkphp.github.io/vue-todo'>1</a>" 

    $scope.knockoutjs = "<b>KnockoutJS</b> <a href='http://thinkphp.github.io/knockout-flickr/'>1</a>" + 

                        " <a href='http://thinkphp.github.io/knockout-flickr/search.html'>2</a>"

    $scope.polymerjs = "<b>Polymer</b> <a href='#'>1</a> <a href='#'>2</a> <a href='#'>3</a>"

    $scope.emberjs = "<b>EmberJS</b> <a href='http://thinkphp.github.io/ember-todos/'>1</a>"

    $scope.golang = "<b>Go</b> <a href='http://github.com/thinkphp/computer-science-in-go/'>1</a> <a href='http://github.com/thinkphp/seeds.go/'>2</a>"

    $scope.cplusplus = "<b>C/C++</b> <a href='https://github.com/thinkphp/computer-science-in-c'>1</a> <a href='https://github.com/thinkphp/fa'>2</a>"

    $scope.python = "<b>Python</b> <a href='http://github.com/thinkphp/computer-science-in-python/'>1</a> <a href='http://github.com/thinkphp/seeds.py/'>2</a>"

    $scope.ruby = "<b>Ruby</b> <a href='http://github.com/thinkphp/computer-science-in-ruby/'>1</a> <a href='http://github.com/thinkphp/seeds.ruby/'>2</a>"

    $scope.ai = "<u>Artificial Intelligence</u><br/><a href='https://github.com/thinkphp/lisp-training'>LISP</a> <a href='https://github.com/thinkphp/scheme-training'>Scheme</a> <a href='#'>Prolog</a> <a href='https://github.com/thinkphp/haskell-training'>Haskell</a> <a href='#'>OCaml</a>"

    $scope.ProgrammigContestPlatform = "<u>Coding Contest Platform</u><br/><a href='#'>Topcoder</a> <a href='#'>code jam</a> <a href='http://codeforces.com/profile/thinkphp'>Codeforce</a> <a href='https://projecteuler.net/'>Project Euler</a> <a href='#'>Spoj</a> <a href='https://www.hackerrank.com/statescua?hr_r=1'>HackerRank</a> <a href='http://www.infoarena.ro/utilizator/thinkphp'>Infoarena</a> <a href='http://practice.geeksforgeeks.org/user-profile.php?user=thinkphp'>GeeksforGeeks</a> <a href='http://acm.timus.ru/author.aspx?id=228328'>Timus Online Judge</a>"

    $scope.toys = "<u>Toys</u><br/> <a href='http://thinkphp.github.com/sin/'>sin</a> <a href='http://thinkphp.github.com/cos'>cos</a> <a href='http://thinkphp.github.com/ln'>ln</a> <a href='http://thinkphp.github.com/e'>Euler's Number</a> <a href='http://thinkphp.github.com/pi'>Monte Carlo Pi</a> <a href='http://thinkphp.github.com/pi'>Leibniz Pi</a> <a href='http://thinkphp.github.com/sqrt'>sqrt</a> <a href='http://thinkphp.ro/apps/geo/GeoIP/'>GeoIP</a> <a href='http://thinkphp.ro/apps/YQL/24ways.org/24-ways-2009/24way.org.html'>RSS Reader</a> <a href='http://webster.thinkphp.ro/'>webster</a> <a href='https://thinkphp.github.io/wikipedia-viewer/'>Wikipedia Viewer</a>"

  }]);

})(window.angular);
