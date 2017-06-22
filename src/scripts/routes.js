define('routes', [
    'services/locationService',
    'views/home',
    'views/pricing',
    'views/docs',
    'views/contact',
    'views/privacy'
  ], function(locationService, home, pricing, docs, contact, privacy){

    var _public = {};

    var routes = {
      '/': {
        viewModule: home
      },
      '/pricing': {
        viewModule: pricing
      },
      '/docs': {
        viewModule: docs
      },
      '/contact': {
        viewModule: contact
      },
      '/privacy': {
        viewModule: privacy
      }
    };

    _public.initViewModule = function(){
      var route = routes[locationService.path()];
      if(route)
        route.viewModule.init();
    };

    return _public;

});
