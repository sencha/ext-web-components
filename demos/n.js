function filterProperty2(propertyValue) {
  try {
    const parsedProp = JSON.parse(propertyValue);

    if (parsedProp === null || parsedProp === undefined || parsedProp === true || parsedProp === false || parsedProp === Object(parsedProp)) {
      console.log('parsed')
      return parsedProp;
    } else {
      console.log('property')
      return propertyValue;
    }
  }
  catch(e) {
    console.log('property')
    return propertyValue;
  }
}

function filterProperty(propertyValue) {
  try {
    const parsedProp = JSON.parse(propertyValue);
    console.log(parsedProp)
    console.dir(Object(parsedProp))
    console.log(typeof parsedProp)
    if (parsedProp === typeof object) {
      console.log('equal')
    }

    var opts = [null,undefined,true,false]
    if (opts.includes(parsedProp) || parsedProp === Object(parsedProp)) {
      console.log('parsed')
    }
    else {
      console.log('property')
    }
    if (parsedProp === null || parsedProp === undefined || parsedProp === true || parsedProp === false || parsedProp === Object(parsedProp)) {
      console.log('parsed')
      return parsedProp;
    } else {
      console.log('property')
      return propertyValue;
    }
  }
  catch(e) {
    console.log('property')
    return propertyValue;
  }
}

var n;
n = filterProperty(true);console.log(typeof n);console.log('*****');
n = filterProperty('true');console.log(typeof n);console.log('*****');
n = filterProperty(0);console.log(typeof n);console.log('*****');
n = filterProperty('0');console.log(typeof n);console.log('*****');
n = filterProperty('{"a":"hello"}');console.log(typeof n);console.log('*****');