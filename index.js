function getValue(condition) {
  if (condition) {
    var value = 'blue';

    return value;
  } else {
    //value exists as undefined
  }

  //value exists as undefined
}

//the code above is equal to

function getValue(condition) {
  var value;

  if (condition) {
    value = 'blue';

    return value;
  }

  return null;
}