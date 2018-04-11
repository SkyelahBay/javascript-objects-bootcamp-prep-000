function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

const recipe = {eggs: 3};
destructivelyUpdateObjectWithKeyAndValue(recipe, 'eggs', 'sausage');

//the above will return our constant variable that was actually changed.