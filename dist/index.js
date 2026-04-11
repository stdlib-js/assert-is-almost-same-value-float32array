/** @license Apache-2.0 */

'use strict';

/**
* Test if two arguments are both Float32Arrays and contain respective elements which are approximately the same value within a specified number of ULPs (units in the last place).
*
* @module @stdlib/assert-is-almost-same-value-float32array
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var isAlmostSameValueFloat32Array = require( '@stdlib/assert-is-almost-same-value-float32array' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = isAlmostSameValueFloat32Array( x, y, 1 );
* // returns true
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var isAlmostSameValueFloat32Array = require( '@stdlib/assert-is-almost-same-value-float32array' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 4.0 ] );
*
* var out = isAlmostSameValueFloat32Array( x, y, 1 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
