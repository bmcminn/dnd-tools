
function getTemplate($el) {
    return document.querySelector($el).innerHTML
}


/**
 * { function_description }
 * @sauce   https://www.freecodecamp.org/news/javascript-debounce-example/
 * @param   {callable}  callback        The callback
 * @param   {number}    [timeout=300]   The timeout
 * @return  {callable}                  The resulting debounce handler
 */
function debounce(callback, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, timeout);
    };
}


/**
 * { function_description }
 *
 * @param      {string}  value   The value
 * @return     {<type>}  { description_of_the_return_value }
 */
function isEmpty(value) {
    const testType = typeof value

    const isArray  = Array.isArray(value)
    const isString = typeof value === 'string'

    if (!isArray && !isString) { return null }

    if (isString) {
        value = value.trim()
    }

    return value.length === 0
}


function isNaN(value) {
    return Number.isNaN(value)
}
