/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/string-format' );
var base = require( '@stdlib/string-base-constantcase' );


// MAIN //

/**
* Converts a string to constant case.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {string} constant-cased string
*
* @example
* var str = constantcase( 'beep' );
* // returns 'BEEP'
*
* @example
* var str = constantcase( 'beep boop' );
* // returns 'BEEP_BOOP'
*
* @example
* var str = constantcase( 'isMobile' );
* // returns 'IS_MOBILE'
*
* @example
* var str = constantcase( 'Hello World!' );
* // returns 'HELLO_WORLD'
*/
function constantcase( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	return base( str );
}


// EXPORTS //

module.exports = constantcase;
