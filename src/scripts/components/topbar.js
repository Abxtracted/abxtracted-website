define('components/topbar', [
    'jquery',
    'constants/trackConstants',
    'components/menuPrimary',
    'services/locationService',
    'services/trackService'
  ], function($, trackConstants, menuPrimary, locationService, trackService){

    var TOPBAR_SELECTOR = '[data-js=topbar]';
    var TOPBAR_LOGO_SELECTOR = [TOPBAR_SELECTOR,'[data-js=logo]'].join(' ');

    var _public = {};

    _public.init = function(){
      bindElements();
      if(menuPrimary.isPresent())
        menuPrimary.init();
    }

    _public.getHeight = function(){
      return $(TOPBAR_SELECTOR).outerHeight() || 0;
    }

    function bindElements(){
      $(TOPBAR_LOGO_SELECTOR).on('click', onTopbarLogoClick);
    }

    function onTopbarLogoClick(){
      trackLogoClicked();
      locationService.goToWebisteHome();
    }

    function trackLogoClicked(){
      trackService.track(trackConstants.logo.clicked, {
        context: 'topbar'
      });
    }

    return _public;

});
