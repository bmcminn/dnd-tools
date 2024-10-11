const app = {
    title: 'Num 2 Roman',
    author: 'Branacleboy',
    version: '0.1v',
}


console.time(app.title)


function repeat(char, length) {
    return new Array(Number(length)).fill(char)
}


function num2roman(num) {
    // anything over 99999 is an illegal value
    if (num >= 100000) {
        console.error(`Error: num2roman(${num}) is out of range`)
        // throw new Error('num2roman(num) is out of range')
        return false
    }





    const digits = num.toString().split('').reverse()
    const roman = []


    let ones    = num % 10
    let tens    = Math.floor(num % 100 / 10)
    let cents   = Math.floor(num % 1000 / 100)
    let mils    = Math.floor(num % 100000 / 1000)


    // PROCESS THOUSANDS PLACE
    // if (mils < 4) {
    //     roman.push(...repeat('M', mils))
    // } else if (mils < 5) {
    //     roman.push('')
    // } else
    if (mils) {
        roman.push(...repeat('M', mils))
    // } else if (mils < 10) {
    //     roman.push('CM')
    }


    // PROCESS HUNDREDS PLACE
    if (cents < 4) {
        roman.push(...repeat('C', cents))
    } else if (cents < 5) {
        roman.push('D')
    } else if (cents < 9) {
        roman.push('D', ...repeat('C', cents - 5))
    } else if (cents < 10) {
        roman.push('CM')
    }


    // PROCESS TENS PLACE
    if (tens < 4) {
        roman.push(...repeat('X', tens))
    } else if (tens < 5) {
        roman.push('XL')
    } else if (tens < 9) {
        roman.push('L', ...repeat('X', tens - 5))
    } else if (tens < 10) {
        roman.push('XC')
    }

    // if (tens > 0) {
    //     roman.push(...repeat('X', tens))
    // }

    // PROCESS ONES PLACE
    if (ones < 4) {
        roman.push(...repeat('I', ones))
    } else if (ones < 5) {
        roman.push('IV')
    } else if (ones < 6) {
        roman.push('V')
    } else if (ones < 9) {
        roman.push('V', ...repeat('I', ones - 5))
    } else if (ones < 10) {
        roman.push('IX')
    }

    console.log(num, roman)

    // for (var i = digits.length - 1; i >= 0; i--) {
    //     const digit = Number(digits[i])
    //     // process ones digit
    //     if (i === 0) {
    //         if (digit < 4) {
    //             roman.push(...repeat('I', digit))
    //         } else if (digit < 5) {
    //             roman.push('IV')
    //         } else if (digit < 6) {
    //             roman.push('V')
    //         } else if (digit < 9) {
    //             roman.push('V', ...repeat('I', digit - 5))
    //         }
    //     }

        // process 10s digit

        // process 100s digit

        // process 1000s digit

        // process 10000s digit
    // }
    // console.log(roman)

    return roman.join('').trim().toUpperCase()
}


function test(value, assert, expression) {
    try {
        const res = expression(value)
        console.assert(res === assert, `${value} returned ${res}, should match ${assert}`)

    } catch (err) {
        console.error(err)
    }
}


function testNum2Roman(value, assert) {
    return test(value, assert, num2roman)
}


testNum2Roman(100000, false)
testNum2Roman(1,     'I')
testNum2Roman(2,     'II')
testNum2Roman(3,     'III')
testNum2Roman(4,     'IV')
testNum2Roman(5,     'V')
testNum2Roman(6,     'VI')
testNum2Roman(7,     'VII')
testNum2Roman(8,     'VIII')
testNum2Roman(9,     'IX')
testNum2Roman(10,    'X')
testNum2Roman(11,    'XI')
testNum2Roman(12,    'XII')
testNum2Roman(13,    'XIII')
testNum2Roman(14,    'XIV')
testNum2Roman(15,    'XV')
testNum2Roman(16,    'XVI')
testNum2Roman(17,    'XVII')
testNum2Roman(18,    'XVIII')
testNum2Roman(19,    'XIX')
testNum2Roman(20,    'XX')
testNum2Roman(45,    'XLV')
testNum2Roman(74,    'LXXIV')
testNum2Roman(89,    'LXXXIX')
testNum2Roman(90,    'XC')
testNum2Roman(854,   'DCCCLIV')
testNum2Roman(999,   'CMXCIX')
testNum2Roman(1234,  'MCCXXXIV')
testNum2Roman(5084,  'MMMMMLXXXIV')
testNum2Roman(8723,  'MMMMMMMMDCCXXIII')
