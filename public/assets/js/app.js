// Generated by CoffeeScript 1.6.3
(function() {
  var counter, format;

  counter = function() {
    var arableContainer, areaContainer, dateContainer, diffpop, earthArea, earthAreaArable, newpop, offset, popContainer, poprate, popstat, statsdate, today;
    popstat = 5946422755;
    poprate = 2.4452;
    earthArea = 36677592320;
    earthAreaArable = 7680000000;
    today = new Date();
    statsdate = new Date("February 1, 1999");
    offset = today.getTimezoneOffset() * 60 * 1000;
    diffpop = ((today.getTime() + offset) - statsdate.getTime()) / 1000;
    newpop = Math.ceil(popstat + (diffpop * poprate));
    newpop = "" + newpop;
    popContainer = document.getElementById('population');
    popContainer.innerHTML = format(newpop);
    areaContainer = document.getElementById('acres-per-person');
    areaContainer.innerHTML = (earthArea / newpop).toFixed(4);
    arableContainer = document.getElementById('arable-acres-per-person');
    arableContainer.innerHTML = (earthAreaArable / newpop).toFixed(4);
    dateContainer = document.getElementById('current-date');
    dateContainer.innerHTML = new Date();
    return setTimeout(function() {
      return counter();
    }, 200);
  };

  format = function(x) {
    var parts;
    parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  window.onload = function() {
    return counter();
  };

}).call(this);
