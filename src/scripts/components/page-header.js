define('components/pageHeader', [
    'jquery',
    'components/topbar',
    'services/locationService',
    'services/abTestService',
    'constants/abTestConstants'
  ], function($, topbar, locationService, abTestService, abTestConstants){

    var PAGE_HEADER_SELECTOR = '[data-js=page-header]';
    var PAGE_HEADER_SIBLING_SECTION_SELECTOR = [PAGE_HEADER_SELECTOR,'section'].join('+');
    var PAGE_HEADER_PRIMARY_BUTTON_SELECTOR = '[data-js=page-header-primary-button]';
    var PAGE_HEADER_SECONDARY_BUTTON_SELECTOR = '[data-js=page-header-secondary-button]';
    var PAGE_HEADER_BUTTONS_SELECTOR = '[data-js=page-header] > button';

    var _public = {};
    var pageHeaderPrimaryBtnElement, pageHeaderSecondaryBtnElement;

    _public.init = function(){
      bindElements();
      abTestService.getExperimentScenario({
        experimentKey: abTestConstants.experiments.pageHeaderPrimaryBtnKey,
        success: onGetExperimentScenarioSuccess,
        error: onGetExperimentScenarioError
      });
    }

    function bindElements(){
      pageHeaderButtons = $(PAGE_HEADER_BUTTONS_SELECTOR);
      pageHeaderPrimaryBtnElement = $(PAGE_HEADER_PRIMARY_BUTTON_SELECTOR);
      pageHeaderSecondaryBtnElement = $(PAGE_HEADER_SECONDARY_BUTTON_SELECTOR);

      pageHeaderPrimaryBtnElement.on('click', onPageHeaderPrimaryButtonClick)
      pageHeaderSecondaryBtnElement.on('click', goToSiblingSection)
    }

    function onPageHeaderPrimaryButtonClick(){
      abTestService.completeExperiment({
        experimentKey: abTestConstants.experiments.pageHeaderPrimaryBtnKey,
        success: onCompleteExperiment,
        error: onCompleteExperiment
      });
    }

    function goToSiblingSection(){
      var siblingSectionOffset = $(PAGE_HEADER_SIBLING_SECTION_SELECTOR).offset();
      $('html, body').animate({
        scrollTop: siblingSectionOffset.top - topbar.getHeight()
      }, 600, 'swing');
    }

    function onGetExperimentScenarioSuccess(response){
      if(response.scenario == 'variation')
        pageHeaderPrimaryBtnElement.text('Sign up for free');
      onGetExperimentScenarioComplete();
    }

    function onGetExperimentScenarioError(){
      onGetExperimentScenarioComplete();
    }

    function onGetExperimentScenarioComplete(){
      pageHeaderButtons.css('opacity','1');
    }

    function onCompleteExperiment(){
      locationService.goToApp();
    }

    return _public;

});
