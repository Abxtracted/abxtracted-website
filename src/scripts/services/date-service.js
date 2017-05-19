define('services/dateService', function(){

  var _public = {};

  _public.getFormattedDateAndTime = function(date){
    var format = '$YE/$MO/$DA $HO:$MI:$SE';

    return format.replace('$YE', date.getFullYear())
            .replace('$MO', leadingZero(date.getMonth() + 1))
            .replace('$DA', leadingZero(date.getDate()))
            .replace('$HO', leadingZero(date.getHours()))
            .replace('$MI', leadingZero(date.getMinutes()))
            .replace('$SE', leadingZero(date.getSeconds()));
  };

  function leadingZero(number){
    return number < 10 ? '0' + number : number;
  }

  return _public;

});
