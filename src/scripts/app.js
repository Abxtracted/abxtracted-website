define('app', [
    'components/topbar',
    'components/footer',
    'routes'
  ], function(topbar, footer, routes){

    var _public = {};

    _public.init = function(){
      topbar.init();
      footer.init();
      routes.initViewModule();
    }

    return _public;

});
