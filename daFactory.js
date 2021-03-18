var prototypes = [
	'split'
];

var func_factory = function () {
  var funcs = [];

  funcs[prototypes[0]] = function (str, delimiter) {
    var parts = [];
    var partNumber = 0;

    for (var i=0; i < str.length; i++) {
      if (str[i] === delimiter)
        partNumber++;

      if (!parts[partNumber])
        parts[partNumber] = [];

      if (str[i] !== delimiter)
        parts[partNumber].push(str[i]);
    }

    for (var i=0; i < parts.length; i++) {
      var concatenedPart = "";
      for (var j=0; j < parts[i].length; j++)
        concatenedPart = concatenedPart.concat(parts[i][j]);

      parts[i] = concatenedPart;
    }  

    return parts;
  }
  
  return funcs;
}

var da_factory = function (fn, args, funcs) {
  return funcs[fn](args[0], args[1]);  
}

var prototype_factory = function (fn) {
	String.prototype[fn] = function (str) {
  	if (!str)
    	str = delimiter_factory('default');

  	return da_factory(fn, [this, str], func_factory());
  };
}

var delimiter_factory = function (type) {
	switch (type) {
  	case 'semicolon': return ';';
    case 'underscore': return '_';
    case 'comma': return ',';
    case 'default':
    default:
    	return " ";
  }
}

function factory_init() {
	for (var i=0; i < prototypes.length; i++)
    prototype_factory(prototypes[i]);
}

factory_init();

//console.log("Daft Punk aa".split());
