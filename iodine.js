if (!Object.hasOwnProperty('getOwnPropertyNames') {
    Object.getOwnPropertyNames = function(object) {
        var properties, property;
        properties = [];
        
        for (property in object) {
            if(object.hasOwnProperty(property)) {
                properties.push(property);
            }
        }
        
        return properties;
    }
}


if (!Array.hasOwnProperty('isArray')) {
    Array.isArray = function(object){
        return Object.prototype.toString.apply(object) === '[object Array]';
    }
}

/**
Obtains the internal [[Class]] attribte for an object following the logic of Ecma-262-5.1:getPrototypeOf

from Ecma-262-3
15.2.4.2 Object.prototype.toString ( ) 
When the toString method is called, the following steps are taken:
1. Get the [[Class]] property of this object. 
2. Compute a string value by concatenating the three strings "[object ", Result(1), and "]". 
3. Return Result(2).

from Ecma-262-5.1
15.2.4.2	Object.prototype.toString ( )
When the toString method is called, the following steps are taken:
1. If the this value is undefined, return "[object Undefined]". 
2. If the this value is null, return "[object Null]". 
3. Let O be the result of calling ToObject passing the this value as the argument. 
4. Let class be the value of the [[Class]] internal property of O. 
5. Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".

This method is a generalization of Array.isArray (Ecma-262-5.1:15.4.3.2), in which logic we will need isNull, isUndefined, 
isNaN, isString, isObject, isFunction, isRegexp, isBoolean, isMath, isDate, isError.

If we take a look at Array.isArray it only compares the internal [[Class]] property for an object and checks that its
value is "Array" so instead of creating the rest of the functions for all the standar built-in objects we define
Object.getClassOf that returns the internal [[Class]] property value.

@return [String]
**/
if (!Object.hasOwnProperty('getClassOf')) {
    Object.getClassOf = function(O) {
        return Object.prototype.toString.apply(object).match(/\s\w+/)[0];
    }
}

/**
from Ecma-262-5.1
15.2.3.2	Object.getPrototypeOf ( O )
When the getPrototypeOf function is called with argument O, the following steps are taken: 
1.	If Type(O) is not Object throw a TypeError exception.
2.	Return the value of the [[Prototype]] internal property of O.
**/
if (!Object.hasOwnProperty('getPrototypeOf')) {
    Object.getPrototypeOf = function(O) {
        return O.__proto__ || O.constructor.prototype;
    }
}

