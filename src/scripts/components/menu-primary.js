define('components/menuPrimary', [
    'jquery',
    'constants/trackConstants',
    'services/trackService',
    'services/locationService'
  ], function($, trackConstants, trackService, locationService){

    var MENU_PRIMARY_SELECTOR = '[data-js="menu-primary"]';
    var MENU_PRIMARY_ITEM_ATTR = 'data-menu-primary-item';

    var _public = {};

    _public.init = function(){
      bindElements();
    }

    _public.isPresent = function(){
      return $(MENU_PRIMARY_SELECTOR).length;
    }

    function bindElements(){
      $('[' + MENU_PRIMARY_ITEM_ATTR + ']').on('click', onMenuItemClick)
    }

    function onMenuItemClick(evt){
      var itemName = $(evt.currentTarget).attr(MENU_PRIMARY_ITEM_ATTR);

      trackMenuPrimaryItemClicked(itemName);

      if(itemName == 'login')
        locationService.goToApp();
      else
        locationService.path(itemName);
    }

    function trackMenuPrimaryItemClicked(itemName){
      var eventName = getTrackEventName(itemName);
      trackService.track(trackConstants.menuPrimary[eventName]);
    }

    function getTrackEventName(itemName){
      switch(itemName){
        case 'pricing':
          return 'clickedPricing';
        case 'docs':
          return 'clickedDocs';
        case 'contact':
          return 'clickedContact';
        case 'login':
          return 'clickedLogin';
      }
    }

    return _public;

});
