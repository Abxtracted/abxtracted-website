define('services/abTestService', [
    'jquery',
    'abxtracted',
    'constants/configConstants',
    'constants/abTestConstants'
  ], function($, Abx, configConstants, abTestConstants){

  var _public = {};

  _public.getExperimentScenario = function(params){
    executeExperimentAction('getScenario', params);
  };

  _public.completeExperiment = function(params){
    executeExperimentAction('complete', params);
  };

  function executeExperimentAction(action, params){
    var experiment;
    if(configConstants.abTestServiceEnabled){
      experiment = buildExperiment(params);
      experiment[action]({
        success: params.success,
        error: params.error
      });
    } else {
      params.success({scenario: 'control'});
    }
  }

  function buildExperiment(params){
    return new Abx.Experiment(abTestConstants.projectId, params.experimentKey);
  }

  return _public;

});
