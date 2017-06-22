define('views/contact', [
    'constants/trackConstants',
    'services/trackService',
    'components/ctaBar',
    'components/pageHeader',
    'components/contactForm'
  ], function(trackConstants, trackService, ctaBar, pageHeader, contactForm){

    var _public = {};

    _public.init = function(){
      trackContactPageLoaded();
      ctaBar.init();
      pageHeader.init();
      contactForm.init();
    };

    function trackContactPageLoaded(){
      trackService.track(trackConstants.pages.contact.loaded);
    }

    return _public;

});
