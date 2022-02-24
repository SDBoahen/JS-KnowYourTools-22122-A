// Global 🌍💫




//// Variable 

// Something that holds information 
// We can reference that information dynamically 
//// Vari able 
// Something that is able - to VARY 





// console . log( firstArgument , secondArgument )  //


//// Variables - let 

// let a
// console.log( "This is the Value of  a  : " , a )  //
// a = 1
// console.log( "This is the Value of  a - NOW!  : " , a)  //

// let b
// console.log( "This is the Value of  b  : " , b )  //
// b = 2
// console.log( "This is the Value of  b - NOW!  : " , b)  //




// let s = 3
// console.log(s)  //

// s = "Sam"
// console.log(s)  //


// let amy = "Amy"
// console.log(amy)  //




//// Variables - const 
//  "const CAN'T CHANGE"


// console . log( firstArgument , secondArgument )  //


//// Assign Equals = SIGN
//// As(SIGN) Equals(SIGN)
console.log("--------------------------------")  //

let variableDeclaredWithLet = 4
console.log("This is variableDeclaredWithLet: ", variableDeclaredWithLet)  //
const variableDeclaredWithConst = 4
console.log("This is variableDeclaredWithConst: ", variableDeclaredWithConst)  //

console.log("----------------")  //

variableDeclaredWithLet = 4
console.log("This is variableDeclaredWithLet, NOW: ", variableDeclaredWithLet)  //
// variableDeclaredWithConst = 4 ///// THIS IS A NONO  :(
console.log("This is variableDeclaredWithConst, NOW: ", variableDeclaredWithConst)  //

console.log("----------------")  //

// let variableDeclaredWithLet = [] ///// THIS IS A NONO  :(
// const variableDeclaredWithConst = [] ///// THIS IS A NONO  :(


// string, integer, BigInt, boolean
// Reference - Refer To

const arrayDeclaredWithConstTHATSAMISGONNACHANGE = []
console.log("This is variableDeclaredWithConstTHATSAMISGONNACHANGE: ", arrayDeclaredWithConstTHATSAMISGONNACHANGE)  //

// arrayDeclaredWithConstTHATSAMISGONNACHANGE = [ "Alexis" ] ///// THIS IS A NONO  :(

    //                                     []s .push( theThingYouWantToPushIntoTheArray ) ~ a Function
    //                                         .push returns ????
    //                                     []s .push END RESULT :  [ theThingYouWantToPushIntoTheArray ]
    arrayDeclaredWithConstTHATSAMISGONNACHANGE.push( "Alexis" )
console.log("This is variableDeclaredWithConstTHATSAMISGONNACHANGE: ", arrayDeclaredWithConstTHATSAMISGONNACHANGE)  //



console.log("--------------------------------")  //





console.log("--------------------------------")  //
// Conditionals 


//// Conditionals - if/else/else if

// Checking for boolean condition
// Truthy -vs- Falsey

// =
//// As(SIGN)ment

// ==
// ===
//// Comparison

if( true ){
    
    console.log("SHOW ME TRUE!")  //
    
}

if( false ){
    
    console.log("SHOW ME FALSE")  //
    
}


console.log("----------------")  //


let count = 1

console.log( "This the Result of  count == 0:  " , count == 0 )  //
console.log( "This is the Value of count:  " , count )  //

if( count != 0 ){  // count == 0 : false

    console.log("Continue into the if-Block BECAUSE: count is NOT equal to zero!")  //
    console.log("counting...")

}else{ // if > false > else

    // count IS == to 0

    console.log("DON'T Continue into the if-Block BECAUSE: count is equal to zero!")  //
    
}


console.log("--------------------------------")  //
console.log("--------------------------------")  //




// console.log("Hello Human! Please Count the Kittens! :) ")  //
// console.log(" 😸😸 ")  //

// let theNumberOfKIttens = 2
// let theUserInput = "2"

// if( theNumberOfKIttens == theUserInput ){  // If the userInput is Correct

//  console.log(" YOU ARE CORRRRECT! 😸 ")  //
    

// }else{  // If the userInput is NOT Correct

//  console.log(" YOU ARE NOT CORRRRECT....UNFORTUNATELY! 😾 ")  //

// }


// // **** else if 




console.log("--------------------------------")  //
console.log("--------------------------------")  //




// Functions


//// Functions: General Overview
// in  >  processing/logic  >  out
// "use at a later time"  -  re USE able ibilty



// "some logic"
let theGLOBALplaceHolder = 555
console.log("This is the placeHolder GLOBAL VARIABLE - NOT THE ONE IN THE FUNCTION: ", theGLOBALplaceHolder)  //
// "some logic"


// para-meter - para-nthesis : placeHolder


function nameOfTheFunction( placeHolder ){ //🚪----------------\

    let randomTestVariable = placeHolder
    console.log("This is randomTestVariable = placeHolder ", randomTestVariable)

    // "do somthing"
    console.log("This is the placeHolder parameter: ", placeHolder)  //

} //------------------------------------------------/
nameOfTheFunction(  ) // undefined === NOT-defined
nameOfTheFunction( theGLOBALplaceHolder ) 


// YOU CHOOSE 🛡⚔️


const arrowFunctionName   =( placeHolder )=>   { //🚪----------------\

    let randomTestVariable = placeHolder
    console.log("This is randomTestVariable = placeHolder ", randomTestVariable)

    // "do somthing"
    console.log("This is the placeHolder parameter: ", placeHolder)  //

} //------------------------------------------------/
arrowFunctionName( )
arrowFunctionName( theGLOBALplaceHolder ) 

//🚪----------------\
// const butIThoughtItWasLikeThisQuestionMark = placeHolder => console.log("hey") 
const butIThoughtItWasLikeThisQuestionMark = placeHolder =>{ console.log("hey") 

console.log("hey") 

console.log("hey") 

console.log("hey") 

}
//------------------------------------------------/


function arrowFunctionEvenThoughItsNotDOTDOTDOT(){

    //
    
}
const regularFunctionEvenThoughItsNotDOTDOTDOT =()=>{

    // 

}



//  *** Anonymous Functions
//  *** Callback Functions







// invoking
// calling
// activating 


// undefined 
// null 




console.log("--------------------------------")  //






/*

// delcare a functionby the name of 'heyPerson'
// this function should RETURN the name of the person passed in as an argument


// delcare a function ✅

// by the name of 'heyPerson' ✅

// this function should RETURN ✅

// the name of the person passed in as an argument <<<<

*/

function heyPersonFunction(  ){

    return "something from a Regular Function" // return ~ Logical/Internal/Memeory 

}
console.log(

    heyPersonFunction( )

)
console.log(   heyPersonFunction( )   )


const heyPersonArrowFunction =(  )=> {

    return "something from an Arrow Function" // return ~ Logical/Internal/Memeory 

}
console.log(

    heyPersonArrowFunction( )

)  ////



























// console.log("whateveeerrrr")  //






// function hey(){

//     console.log("hey! 👋🤪")

// }

// hey()
// invoking
// calling
// activating 