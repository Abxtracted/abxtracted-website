define('components/subscriptionForm', [
    'jquery',
    'constants/trackConstants',
    'services/trackService',
    'services/locationService'
  ], function($, trackConstants, trackService, locationService){

    var SUBSCRIPTION_FORM_SELECTOR = '[data-js=subscription-form]';

    var _public = {};

    _public.init = function(){
      bindElements();
    };

    function bindElements(){
      $(SUBSCRIPTION_FORM_SELECTOR).on('submit', onSubscriptionFormSubmit);
    }

    function onSubscriptionFormSubmit(evt){
      var emailAddress = getEmailAddress(evt.currentTarget);
      evt.preventDefault();
      trackSubscriptionFormSubmit(emailAddress);
      goToApp(emailAddress);
    }

    function getEmailAddress(formElement){
      return $('input', formElement).val();
    }

    function trackSubscriptionFormSubmit(emailAddress){
      trackService.track(trackConstants.subscriptionForm.submitted, {
        email: emailAddress
      });
    }

    function goToApp(emailAddress){
      locationService.goToApp({
        emailAddress: emailAddress
      });
    }

    return _public;

});
