/**
 * Handles the calculation of the sum of two numbers obtained from the DOM.
 * The function retrieves the numbers from input fields defined in the `dom` module,
 * calculates their sum using the `sum` utility, and then displays the result
 * in the specified container. If the result container doesn't exist, it creates one
 * using `createSum`; if it does, it updates the existing container with the new result
 * using `updateSum`.
 *
 * @function
 * @example
 * sumHandler();
 */

import dom from '../dom.js';
import sum from '../utils/sum.js';
import createSum from '../components/createSum.js';
import updateSum from '../components/updateSum.js';



export default sumHandler;
