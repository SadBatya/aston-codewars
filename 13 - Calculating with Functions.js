function executeValue(callback, value) {
  return typeof callback === "function" ? callback(value) : value;
}

function zero(callback) {
  return executeValue(callback, 0);
}
function one(callback) {
  return executeValue(callback, 1);
}
function two(callback) {
  return executeValue(callback, 2);
}
function three(callback) {
  return executeValue(callback, 3);
}
function four(callback) {
  return executeValue(callback, 4);
}
function five(callback) {
  return executeValue(callback, 5);
}
function six(callback) {
  return executeValue(callback, 6);
}
function seven(callback) {
  return executeValue(callback, 7);
}
function eight(callback) {
  return executeValue(callback, 8);
}

function nine(callback) {
  return executeValue(callback, 9);
}

function plus(a) {
  return function (b) {
    return a + b;
  };
}

function minus(a) {
  return function(b){
    return b - a
  }
}
function times(a) {
  return function(b){
    return a * b
  }
}
function dividedBy(a) {
  return function(b){
    return Math.floor(b / a)
  }
}
