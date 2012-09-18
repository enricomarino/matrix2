
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
   * @return {Float32Array} 2d matrix
   * @api public
   */

  matrix2.create = function (values) {
    return new Float32Array(values || [1.0, 0.0, 0.0, 1.0]);
  };

}(this));