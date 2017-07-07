define('resources/mailchimpResource', [
    'resources/baseResource'
  ], function(baseResource){

    var LISTS_BASE_URL = environment.mailchimp.api.baseUrl + '/lists';
    var LIST_MEMBERS_BASE_URL = LISTS_BASE_URL + '/:listId/members';
    var USER = environment.mailchimp.api.user;
    var KEY = environment.mailchimp.api.key;

    var _public = {};

    _public.subscribeToList = function(listId, emailAddress){
      var url = LIST_MEMBERS_BASE_URL.replace(':listId', listId);
      return baseResource.post(url, {
        email_address: emailAddress,
        status: 'subscribed'
      }, getHeaders());
    };

    function getHeaders(){
      return {
        'content-type': 'application/json',
        user: [USER,KEY].join(':')
      };
    }

    function getOptions(){
      return {
        user: [USER,KEY].join(':')
      };
    }

    return _public;

});
