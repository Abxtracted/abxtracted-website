define('views/docs', [
    'constants/trackConstants',
    'services/trackService',
    'components/ctaBar',
    'components/pageHeader',
    'components/codePanels',
    'components/workingExamplesList'
  ], function(trackConstants, trackService, ctaBar, pageHeader, codePanels, workingExamplesList, footer){

    var _public = {};


    _public.init = function(){
      trackDocsPageLoaded();
      ctaBar.init();
      pageHeader.init();
      codePanels.init();
      workingExamplesList.init();
    };

    function trackDocsPageLoaded(){
      trackService.track(trackConstants.pages.docs.loaded);
    }

    return _public;

});
