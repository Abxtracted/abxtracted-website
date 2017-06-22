define('views/home', [
    'services/trackService',
    'constants/trackConstants',
    'components/ctaBar',
    'components/pageHeader'
  ], function(trackService, trackConstants, ctaBar, pageHeader){

    var _public = {};

    _public.init = function(){
      trackHomePageLoaded();
      ctaBar.init();
      pageHeader.init();
    };

    function trackHomePageLoaded(){
      trackService.track(trackConstants.pages.home.loaded);
    }

    return _public;

});
