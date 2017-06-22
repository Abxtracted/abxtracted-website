define('components/footer', [
    'jquery',
    'constants/trackConstants',
    'services/trackService',
    'services/locationService'
  ], function($, trackConstants, trackService, locationService){

    var _public = {};

    var FOOTER_LINK_ATTR = 'data-footer-link'
    var FOOTER_LINK_URL_ATTR = 'data-url';
    var FOOTER_SELECTOR = '[data-js=footer]';
    var FOOTER_LINK_SELECTOR = [FOOTER_SELECTOR, '[' + FOOTER_LINK_ATTR + ']'].join(' ');

    _public.init = function(){
      bindElements();
    }

    function bindElements(){
      $(FOOTER_LINK_SELECTOR).on('click', onFooterLinkClick)
    }

    function onFooterLinkClick(evt){
      var linkName = $(evt.currentTarget).attr(FOOTER_LINK_ATTR);
      var url = $(evt.currentTarget).attr(FOOTER_LINK_URL_ATTR);

      trackFooterLinkClicked(linkName);

      if(isExternalUrl(url))
        openLinkInNewTab(url);
      else
        goToPage(url);
    }

    function trackFooterLinkClicked(linkName){
      var eventName = getTrackEventName(linkName);
      trackService.track(trackConstants.footer[eventName]);
    }

    function getTrackEventName(linkName){
      switch(linkName){
        case 'privacy':
          return 'clickedPrivacyPolicy';
        case 'blog':
          return 'clickedBlog';
        case 'twitter':
          return 'clickedTwitter';
      }
    }

    function openLinkInNewTab(url){
      locationService.url(url, {
        openInNewTab: true
      });
    }

    function goToPage(path){
      locationService.path(path);
    }

    function isExternalUrl(url){
      return url.indexOf('http') > -1;
    }

    return _public;

});
