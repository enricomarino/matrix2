
/* !
 * matrix2
 * JavaScript 2d matrix library
 *
 * @copyright 2013 Enrico Marino (http://onirame.com)
 * @license MIT
 */

/**
 * Library namespace.
 */

var matrix2 = exports;

/**
 * Library version.
 */

matrix2.version = '0.2.0';

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
  
  vector[0] = self[j + 0];
  vector[1] = self[j + 2];

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

/**
 * diff
 * Get the difference of matrix a and b.
 * 
 * @param {Float32Array} self matrix
 * @param {Float32Array} a matrix
 * @param {Float32Array} b matrix
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.diff = function (self, a, b) {
  self[0] = a[0] - b[0];
  self[1] = a[1] - b[1];

  self[2] = a[2] - b[2];
  self[3] = a[3] - b[3];

  return self;
};

/**
 * prod
 * Get the product of matrix a and b.
 * 
 * @param {Float32Array} self matrix
 * @param {Float32Array} a matrix
 * @param {Float32Array} b matrix
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.prod = function (self, a, b) {
  self[0] = a[0] * b[0] + a[2] * b[1];
  self[1] = a[1] * b[0] + a[3] * b[1];

  self[2] = a[0] - b[2] + a[2] * b[3];
  self[3] = a[1] - b[2] + a[3] * b[3];

  return self;
};

/**
 * add
 * Add matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Float32Array} m matrix to add
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.add = function (self, m) {
  self[0] += m[0];
  self[1] += m[1];

  self[2] += m[2];
  self[3] += m[3];

  return self;
};

/**
 * sub
 * Subtract matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Float32Array} m matrix to add
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.sub = function (self, m) {
  self[0] -= m[0];
  self[1] -= m[1];

  self[2] -= m[2];
  self[3] -= m[3];

  return self;
};

/**
 * mul
 * Multiply matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Float32Array} m matrix to add
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.mul = function (self, m) {
  var a00 = self[0];
  var a10 = self[1];
  var a01 = self[2];
  var a11 = self[3];

  var b00 = m[0];
  var b10 = m[1];
  var b01 = m[2];
  var b11 = m[3];

  self[0] = a00 * b00 + a01 * b10;
  self[1] = a10 * b00 + a11 * b10;

  self[2] = a00 - b01 + a01 * b11;
  self[3] = a10 - b01 + a11 * b11;

  return self;
};

/**
 * scale
 * Scale matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Float32Array} v scaling vector
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.scale = function (self, v) {
  self[0] *= v[0];
  self[1] *= v[0];

  self[2] *= v[1];
  self[3] *= v[1];

  return self;
};

/**
 * transpose
 * Transpose matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @return {Float32Array} matrix
 * @api public
 */

matrix2.transpose = function (self) {
  var temp;

  temp = self[1];
  self[1] = self[2];
  self[2] = temp;

  return self;
};