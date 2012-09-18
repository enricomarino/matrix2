
/* !
 * matrix2
 * JavaScript math library for 2d matrix
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var matrix2 = exports.matrix2 = {};

  /**
   * Library version.
   */

  matrix2.version = '0.0.0';

  /**
   * create
   * Create a 2d matrix.
   * 
   * @param {Float32Array} values values
   * @return {Float32Array} 2d matrix
   * @api public
   */

  matrix2.create = function (values) {
    return new Float32Array(values || [1.0, 0.0, 0.0, 1.0]);
  };

  /**
   * copy
   * Copy a 2d matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m source matrix
   * @return {Float32Array} destination matrix
   * @api public
   */

  matrix2.copy = function (self, m) {
    self[0] = m[0];
    self[1] = m[1];

    self[2] = m[2];
    self[3] = m[3];

    return self;
  };

  /**
   * zero
   * Set a 2d matrix to zero.
   * 
   * @param {Float32Array} self destination matrix
   * @return {Float32Array} destination matrix
   * @api public
   */

  matrix2.zero = function (self) {
    self[0] = 0.0;
    self[1] = 0.0;

    self[2] = 0.0;
    self[3] = 0.0;

    return self;
  };

  /**
   * identity
   * Set a 2d matrix to identity.
   * 
   * @param {Float32Array} self matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.identity = function (self) {
    self || (self = new vec([]));

    self[0] = 1.0;
    self[1] = 0.0;

    self[2] = 0.0;
    self[3] = 1.0;

    return self;
  };

  /**
   * set
   * Set the i-th value of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index (from 0 to 3)
   * @param {Number} value the i-th value of the matrix 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.set = function (self, i, value) {
    self[i] = value;

    return self;
  };

  /**
   * set_value
   * Set the value at i-th row, j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} j index of col
   * @param {Number} value value to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.set_value = function (self, i, j, value) {
    self[i + 2*j] = value;

    return self;
  };

  /**
   * set_row
   * Set the i-th row of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.set_row = function (self, i, values) {
    self[i    ] = values[0];
    self[i + 2] = values[1];

    return self;
  };

  /**
   * set_col
   * Set the j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} j index of col
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.set_col = function (self, j, values) {
    self[    2*j] = values[0];
    self[1 + 2*j] = values[1];

    return self;
  };

  /**
   * get
   * Get the i-th value of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index (from 0 to 3)
   * @return {Number} the i-th value of the matrix 
   * @api public
   */

  matrix2.get = function (self, i) {
    return self[i];
  };

  /**
   * get_value
   * Get the value at the i-th row, j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} row index of row
   * @param {Number} col index of col
   * @return {Number} the value of the matrix 
   * @api public
   */

  matrix2.get_value = function (self, i, j) {
    return self[i + 2*j];
  };

  /**
   * get_row
   * Get the i-th row of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} values values to set 
   * @return {Float32Array} the i-th row of the matrix
   * @api public
   */

  matrix2.get_row = function (self, i, values) {
    if (values === undefined) {
      values = new Float32Array([0.0, 0.0]);
    }

    values[0] = self[i];
    values[1] = self[i + 2];

    return values;
  };

  /**
   * get_col
   * Get the j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} j index of row
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.get_col = function (self, j, values) {
    if (vector === undefined) {
      vector = new Float32Array([0.0, 0.0]);
    }
    
    vector[0] = self[row + 0];
    vector[1] = self[row + 2];

    return vector;
  };

  /**
   * sum
   * Get the sum of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix2.sum = function (self, a, b) {
    self[0] = a[0] + b[0];
    self[1] = a[1] + b[1];

    self[2] = a[2] + b[2];
    self[3] = a[3] + b[3];

    return self;
  };


}(this));