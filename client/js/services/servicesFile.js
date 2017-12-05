 'use strict';

  angular
    .module('contacts')
    .factory('appServices', appServices);
    appServices.$inject = ['$http'];

    function appServices($http){
    	var service = {
    		// addContact:addContact,
        set: set,
        get: get
    	};
    return service;
    var savedData;
    // function addContact(details) {
    //     return $http.post('api/addContact',details);
    // }
    function set(data) {
     return savedData = data;
    }
    function get() {
     return savedData;
    }

}