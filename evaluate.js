// evaluate teachers.
// you can pase your rate and delay as parameters.
(function(rate, delay){
  var len = window.frames[0].document.querySelectorAll('#pjkc option').length;
  rate = rate || 1, delay = delay || 1000;
  var _delay = 0
  for(var i = 0 ; i < len; ++i){
    setTimeout(function(){
      var j = 0;
      Array.apply(this, window.frames[0].document.querySelectorAll('.datelist select')).forEach(function(a){
        a.querySelectorAll('option')[rate].selected = true;
        if( ++j % 9 == 0){a.querySelectorAll('option')[rate == 2 ? 1 : 2].selected = true;}
      });
      window.frames[0].document.querySelector('#Button1').click();
    }, (_delay += delay));
    }

  }
)(1, 1000);

