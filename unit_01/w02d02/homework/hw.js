// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    var countdownBar = document.getElementById('numeric-display');
    countdownBar.innerHTML = timerValue;
        if ( timerValue <= 10) {
            countdownBar.style.color = "red";
            var timeSize = 10 - timerValue;
            countdownBar.style.fontSize = ((timeSize * 0.05) + 1) * 1.5 + 'em';
    }

  },
  drawProgressBars: function(timerValue){
    var progressTime = 100 - timerValue;
    var progressBar = document.getElementsByClassName('progress-bar')[0];
    progressBar.style.width = progressTime + '%';

  },
  drawLitFuses: function(timerValue){
var burnRate = timerValue  / 100;
fusePercent = burnRate * 98;
burntFusePercent = (1 - burnRate) * 98;
var fuseLength = document.getElementsByClassName('unburnt')[0];
fuseLength.style.width = fusePercent + '%';
var burntLength =document.getElementsByClassName('burnt')[0];
burntLength.style.width = burntFusePercent + '%';

  },
  drawCrawlers: function(timerValue){
var
    // Your Code Here
  }
};
