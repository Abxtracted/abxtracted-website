define('components/workingExamplesList', [
    'jquery',
    'constants/trackConstants',
    'services/trackService',
    'services/locationService'
  ], function($, trackConstants, trackService, locationService){

    var _public = {};

    var WORKING_EXAMPLES_LIST_ITEM_LINK_ATTR = 'data-working-list-item-link'
    var WORKING_EXAMPLES_LIST_ITEM_URL_ATTR = 'data-url';
    var WORKING_EXAMPLES_LIST_SELECTOR = '[data-js=working-examples-list]';
    var WORKING_EXAMPLES_LIST_ITEM_LINK_SELECTOR = [WORKING_EXAMPLES_LIST_SELECTOR, '[' + WORKING_EXAMPLES_LIST_ITEM_LINK_ATTR + ']'].join(' ');

    _public.init = function(){
      bindElements();
    }

    function bindElements(){
      $(WORKING_EXAMPLES_LIST_ITEM_LINK_SELECTOR).on('click', onWorkingExamplesListItemLinkClick)
    }

    function onWorkingExamplesListItemLinkClick(evt){
      var linkName = $(evt.currentTarget).attr(WORKING_EXAMPLES_LIST_ITEM_LINK_ATTR);
      var url = $(evt.currentTarget).attr(WORKING_EXAMPLES_LIST_ITEM_URL_ATTR);

      trackWorkingExamplesListItemLinkClicked(linkName);
      openLinkInNewTab(url);
    }

    function trackWorkingExamplesListItemLinkClicked(linkName){
      var eventName = getTrackEventName(linkName);
      trackService.track(trackConstants.workingExamplesList[eventName]);
    }

    function getTrackEventName(linkName){
      switch(linkName){
        case 'vanilla-js':
          return 'clickedVanillaJs';
        case 'jquery':
          return 'clickedJQuery';
      }
    }

    function openLinkInNewTab(url){
      locationService.url(url, {
        openInNewTab: true
      });
    }

    return _public;

});
