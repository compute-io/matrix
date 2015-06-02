/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix class:
	matrix = require( './../lib' ).raw,

	// Module to be tested:
	mget = require( './../lib/mget.raw.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'matrix.raw#mget', function tests() {

	var mat, data;

	data = new Int8Array( 100 );
	for ( var i = 0; i < data.length; i++ ) {
		data[ i ] = i;
	}
	mat = matrix( data, [10,10] );

	it( 'should export a function', function test() {
		expect( mget ).to.be.a( 'function' );
	});

	it( 'should return values located at specified linear indices', function test() {
		var mat1 = mat.mget( [14,28,47] );

		assert.deepEqual( mat1.shape, [1,3] );
		assert.strictEqual( mat1.toString(), '14,28,47' );
	});

	it( 'should all rows and select columns', function test() {
		var mat1 = mat.mget( null, [1] );

		assert.deepEqual( mat1.shape, [10,1] );
		assert.strictEqual( mat1.toString(), '1;11;21;31;41;51;61;71;81;91' );
	});

	it( 'should all columns and select rows', function test() {
		var mat1 = mat.mget( [1], null );

		assert.deepEqual( mat1.shape, [1,10] );
		assert.strictEqual( mat1.toString(), '10,11,12,13,14,15,16,17,18,19' );
	});

});
