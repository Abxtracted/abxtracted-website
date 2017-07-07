define('services/locationService', [
    'providers'
  ], function(providers){

    var _public = {};

    _public.url = function(url, options){
      if(url && options && options.openInNewTab)
        providers.$window.open(url);
      else if (url)
        providers.$location.href = url;
      else
        return providers.$location.href;
    };

    _public.path = function(path){
      if(path)
        providers.$location.pathname = path;
      else
        return providers.$location.pathname;
    };

    _public.goToApp = function(searchParams){
      var url = environment.appBaseUrl + '/#!/login';
      if(searchParams)
        url += stringifySearchParams(searchParams);
      _public.url(url, {
        openInNewTab: true
      });
    };

    _public.goToWebisteHome = function(){
      _public.path('/');
    }

    function stringifySearchParams(params){
      var stringifiedSearchParams = [];
      for(var key in params)
        stringifiedSearchParams.push(encodeSearchParam(key, params[key]));
      return '?' + stringifiedSearchParams.join('&');
    }

    function encodeSearchParam(key, value){
      return [key, encodeURIComponent(value)].join('=');
    }

    return _public;

});
