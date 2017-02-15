console.log(typeof {}); 			//output: object
console.log(typeof []); 			//output: object
console.log(typeof function(){});	//output: function
console.log(typeof undefined);		//output: undefined

var a;
console.log(typeof a); 				//output: undefined

a = {};
console.log(typeof a.property);		//output: undefined