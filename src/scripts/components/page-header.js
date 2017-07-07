define('components/pageHeader', [
    'components/subscriptionForm'
  ], function(subscriptionForm){

    var _public = {};

    _public.init = function(){
      subscriptionForm.init();
    }

    return _public;

});
