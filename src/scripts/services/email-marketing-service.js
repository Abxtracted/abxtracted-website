define('services/emailMarketingService', [
  'resources/mailchimpResource'
  ], function(mailchimpResource){

  var _public = {};

  _public.subscribeToList = function(list, emailAddress){
    return mailchimpResource.subscribeToList(list, emailAddress);
  };

  return _public;

});
