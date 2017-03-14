// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";
//NOTES:
//ParseInt pushes a number thats a string and returns a number value
// Data Management and Business Logic //
$(function(){
  
});
console.log("This is the TOP OF SCRIPT: CounterCollection" + );

const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
    console.log("The createCounter function just ran and it pushed a new counter and it returned this.lastCountId: " this.lastCountId);
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    var $newCounterComponent = $ ('<div class="counter" data-index="2"><h3>Count: <span > 0 </span></h3><button class="increment"> + 1 </button></div>');
    $newCounterComponent.appendTo('counter-list');  
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // Your Code Here
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Your Code Here

  },
  onClickIncrement: function(event){
    // Your Code Here
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
