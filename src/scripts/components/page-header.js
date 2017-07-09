define('components/pageHeader', [
    'jquery',
    'components/subscriptionForm'
  ], function($, subscriptionForm){

    var PAGE_HEADER_SELECTOR = '[data-js=page-header]';

    var _public = {};

    _public.init = function(){
      initSubscriptionForm();
    }

    function initSubscriptionForm(){
      var rootElement = $(PAGE_HEADER_SELECTOR);
      subscriptionForm.init(rootElement);
    }

    return _public;

});
