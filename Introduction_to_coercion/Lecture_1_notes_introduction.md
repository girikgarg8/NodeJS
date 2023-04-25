===COERCION===

coercion is of two types: implicit conversion and explicit conversion

In languages like C/C++/Java, types exist for variables, meaning that the bucket in the memory has type int/char, so while declaring int x=10; we fix that the bucket will only have data of integer type

Whereas in language like JS, type exist for values, meaning that if I use let x=10 and then x="Hello", it is valid because it is what inside the bucket that defines the data type

The statement: "everything in javascript is an object" is false. Because apart from the 6 primitive data types, everything is not an object. 

Example: boolean variables are not objects

abstract operations: (from ecmascript documentation): these are the functions which can't be used bt the end user but they are internal functions that are used internally by Javascript, they are mentioned in the Javascript documentation for understanding of developers


Documentation of ECMAScript says: 
ECMAScript language implicitly performs automatic type conversion as needed, in order to understand how it works, JS provides us abstract operations. The conversion abstract operations are polymorphic, can accept all data types defined in ECMAScript but not something out of it (like complex number is defined in python but not in JS)

The first abstract operation that we need to learn is toPrimitive

===toPrimitive abstract function ===
toPrimitive  takes an input argument and tries to convert into a non object type (primitive type), if it can't convert it throws an TypeError

 the toPrimtive abstract operation takes an input argument and an optional 'Preferred Type' argument

This operation converts the input to a non-object type values. If an argument is capable of getting converted into more than one primtive type (like the input argument can be converted to string and number both), then the function uses preferred Type argument to resolve it

As we said that toPrimitive is an abstract operation, so we cannot invoke it but JS internally can invoke it.

From the documentation:

[EcmaScript documentation, the source of truth ](https://262.ecma-international.org/10.0/#sec-abstract-operations)

1 . Assert: input is an ECMAScript language value. (assert means make sure that this condition should be true, laguage )

2 . If Type(input) is Object, then
    2.1 If PreferredType is not present, let hint be "default".
    2.2 Else if PreferredType is hint String, let hint be "string".
    2.3 Else PreferredType is hint Number, let hint be "number".
    2.4 Return OrdinaryToPrimitive(input, hint).

3 . Return input.

====Explanation of toPrimtitve Algorithm====
Assert: means verify

JS intialises a variable called hint

if no preferred type is present, hint is intialised to default

else if PreferredType is string, hint=="String"
else if PreferredType is number, hint=="Number"
(note that higher preference is given to string than number)

if hint still remains default, then set hint to "number"

At the end, the function OrdinaryToPrimitive is called

Explanation of ==OrdinaryToPrimitive== (Just for remembering, OTP OrdinaryToPrimitive means anything to primitive) in easy way:

1 . for hint="number", methodNames are valueOf() and toString() (order is important)
2 . for hint="string", methodNames are toString() and valueOf() (in that order)
3 . Call the first methodName on the input argument, if the returned answer is a non-object (primitive value), then return it. Else, return the output of second methodName.
4 . If there's a case where both the methods are not able to return a non-object value, in that case a TypeError exception will be thrown. //note that these methods toString and valueOf are not abstract functions, so we can override them and play with them, see the code_examples_first_lecture.js file

===A note on TypeError exception (MDN documentation)===

A TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

A TypeError may be thrown when:

1 . an operand or argument passed to a function is incompatiable with the type expected by that operator or function (OrdinaryToPrimitive wanted to return a non-object but couldn't, so it will throw a TypeError)

2 . when attempting to modiy a value that cannot be changed (eg, const b=100; b=1000 will result in an TypeError)

3 . when attempting to use a value in an inappropriate way


Q. Now the question arises, how can I test the toPrimitive abstract function, because it is an asbtract function, so I as a programmer can't directly call this function.

A. The answer to this question, is that the addition(+) and subtraction operators (-), make use of the ToNumber/ToString abstract functions,and these abstract functions, in turn call the toPrimitive functrion, so we can test the functionality of toPrimitive using these abstract functions.

NOTE: ToString is an abstract function while toString is a method of javascript objects.

See the diagram below:

[Diagram](https://drive.google.com/open?id=1TDaAjOJDe9WFlNKpBGDwNzsjzrtmHBDM)

So, now let's understand the ToString and ToNumber abstract functions, before moving on to addition and subtraction operators.

From the documentation:

==ToString() abstract function==
    undefined: return "undefined" as a string

    null: return "null" as a string

    boolean:  returns "True"/"False" as the case may be

    Number: calls NumberToString() function

    String: returns the passed argument

    Symbol: Throws a TypeError 

    Object: calls the toPrimitive function with hint as "String" , let's say the output is 'x' then recursively passes 'x' into toString function if 'x' is not of type String (Why the need for recursion? Becuase ToPrimitive might return a number, it is okay from the POV of toPrimtive but not fine from the POV of ToString abstract function)

    Formally, this is what is mentioned for Object: 	
        Apply the following steps:

        Let primValue be ? ToPrimitive(argument, hint String).
        Return ? ToString(primValue).


===ToNumber Abstract Function===

Argument Type	Result
Undefined NaN 

(Little discussion about NaN: NaN is used to represent an invalid index, for example if in a array an element doesn't exist, then we could return -1, but in language like python -1 also denotes an index, so we return NaN: an indicator of invalid index).

Null	Return +0.

Boolean	If argument is true, return 1. If argument is false, return +0.

Number	Return argument (no conversion).

String	See grammar and conversion algorithm below. (the summary is if a number is like "123", it will be converted into 123, but it will give NaN for any other string like "12345ABC")

Some examples of this algorithm:
""->0
"0"->0
"-0"->-0
"3.145"->3.145
"0."->0
"."->NaN

In technical terms, If the grammar cannot interpret the String as an expansion of StringNumericLiteral, then the result of ToNumber is NaN.

Symbol	Throw a TypeError exception.

Object: Calls the toPrimitive abstract function with hint as Number, and uses recursion if needed.
Apply the following steps:

Let primValue be ? ToPrimitive(argument, hint Number).
Return ? ToNumber(primValue).


== Discussion on Addition operator(+) == (TODO)




