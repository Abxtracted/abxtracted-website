define('components/ctaBar', [
    'jquery',
    'constants/trackConstants',
    'services/trackService',
    'services/locationService'
  ], function($, trackConstants, trackService, locationService){

    var _public = {};

    _public.init = function(){
      bindElements();
    }

    function bindElements(){
      $('[data-js="cta-bar-button"]').on('click', onCtaBarButtonClick)
    }

    function onCtaBarButtonClick(){
      trackCtaBarPrimaryBtnClicked();
      locationService.goToApp();
    }

    function trackCtaBarPrimaryBtnClicked(){
      trackService.track(trackConstants.ctaBar.clickedPrimaryBtn);
    }

    return _public;

});
