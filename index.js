
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
   * @param {Float32Array} self destination matrix
   * @return {Float32Array} destination matrix
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

}(this));