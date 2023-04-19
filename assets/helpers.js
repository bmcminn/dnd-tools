
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
