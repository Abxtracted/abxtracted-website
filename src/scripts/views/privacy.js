define('views/privacy', [
    'constants/trackConstants',
    'services/trackService',
    'components/footer'
  ], function(trackConstants, trackService){

    var _public = {};

    _public.init = function(){
      trackPrivacyPageLoaded();
    };

    function trackPrivacyPageLoaded(){
      trackService.track(trackConstants.pages.privacy.loaded);
    }

    return _public;

});
