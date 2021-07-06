
function mySome(an_array, test) {
  for( let i =0; i < an_array.length; i++) {
    if(test(an_array[i]) == true ) {
      return true;
    }
  }
}
//const test = (element) => element % 2 === 0;


function myEvery(an_array, my_function) {
  for( let i =0; i < an_array.length; i++) {
    if(my_function(an_array) == 0) {
      return false;
    }
    return true;
  }
}

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let new_array = [];
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    new_array.push(callbackFn(this[i], i, this));
  }
  return new_array;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let new_array = [];
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    new_array.push(callbackFn(this[i], i, this));
  }
  return new_array;

};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    if(callbackFn(this[i]) === true) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    if(callbackFn(this[i]) === false) {
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};

// INCLUDES //
Array.prototype.myIncludes = function(elem) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    if(this[i] === elem) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(elem) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    if(this[i] === elem) {
      return i;
    }
  }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
  let arg_i = 0;
  let length = this.length;
  for(let i = length; i < length + args.length; i++) {
    this[i] = args[arg_i];
    arg_i++;
  }
  return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(elem) {
  let found = -1;
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    if(this[i] === elem) {
      found = i;
    }
  }
    return found;
};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
