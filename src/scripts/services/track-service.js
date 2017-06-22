define('services/trackService', function(){

  var _public = {};

  _public.track = function(eventName, eventData){
    if(window.mixpanel)
      mixpanel.track(eventName, eventData);
  };

  return _public;

});
