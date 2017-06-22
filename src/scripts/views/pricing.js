define('views/pricing', [
    'constants/trackConstants',
    'services/trackService',
    'components/ctaBar',
    'components/pageHeader'
  ], function(trackConstants, trackService, ctaBar, pageHeader){

    var _public = {};

    _public.init = function(){
      trackPrincingPageLoaded();
      ctaBar.init();
      pageHeader.init();
    };

    function trackPrincingPageLoaded(){
      trackService.track(trackConstants.pages.pricing.loaded);
    }

    return _public;

});
