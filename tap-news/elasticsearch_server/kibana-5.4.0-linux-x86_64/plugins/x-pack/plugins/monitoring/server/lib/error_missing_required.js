/*
 * A custom error type used for
 * - giving an error a stock message prefix
 * - verification in unit tests
 */

/* Constructor for custom error type
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
function MissingRequiredError(param) {
  this.name = 'MissingRequiredError';
  this.message = `Missing required parameter or field: ${param}`;
  this.stack = (new Error()).stack;
}
MissingRequiredError.prototype = Object.create(Error.prototype);
MissingRequiredError.prototype.constructor = MissingRequiredError;

export default MissingRequiredError;