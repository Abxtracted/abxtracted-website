define('components/ctaBar', [
    'jquery',
    'components/subscriptionForm'
  ], function($, subscriptionForm){

    var CTA_BAR_SELECTOR = '[data-js=cta-bar]';

    var _public = {};

    _public.init = function(){
      initSubscriptionForm();
    }

    function initSubscriptionForm(){
      var rootElement = $(CTA_BAR_SELECTOR);
      subscriptionForm.init(rootElement);
    }

    return _public;

});
