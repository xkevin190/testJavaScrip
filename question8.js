function isIterable(x) {
	try {
	  var res = x.length ? true: false;
	} catch (err) {
	  return false;
	}
	  return res;
}


console.log(isIterable(true))
