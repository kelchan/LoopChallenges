// 1. Print odds 1-20
function printOdd() {
    for ( let i = 1; i <= 20; i++ ) {
        if ( i % 2 != 0 ) {
            console.log( i );
        }
    }
}
printOdd();


// 2. Decreasing Multiples of 3
function decreasingMultiples() {
    for ( let i = 100; i >= 0; i-- ) {
        if ( i % 3 === 0 ) {
            console.log( i );
        }
    }
}
decreasingMultiples();


// Print the sequence
// var array will [ 4, 2.5, 1, -0.5, -2, -3.5 ]
// for loop iterate through given array
// console.log value of each index 
function printSequence( arr ) {
    const example = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        console.log( arr[i] );
    }
}
printSequence( [ 4, 2.5, 1, -0.5, -2, -3.5 ] );


// Sigma
function sumOf100() {
    let sum = 0;
    for ( let i = 1; i <= 100; i++ ) {
        sum += i;
    }
    console.log( sum );
}
sumOf100();


// Factorial 
function factorial() {
    let product = 1;
    for ( let i = 2; i <= 12; i++ ) {
        product *= i;
    }
    console.log( product );
}
factorial();
