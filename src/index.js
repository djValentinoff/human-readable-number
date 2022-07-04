module.exports = function toReadable (number) {
    const numList = {
        s0: ['zero'],
        s1: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        s10: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        s20: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        s100: ['hundred']
    }

    let result = '';

    if (number === 0) {
        result = numList.s0[0];
    }

    if ((number > 0) && (number < 10)) {
        result = numList.s1[number];
    }

    if ((number > 9) && (number < 20)) {
        result = numList.s10[number - 10];
    }

    if ((number > 19) && (number < 100)) {
        result = `${numList.s20[Math.floor(number / 10)]} ${numList.s1[number % 10]}`;
    }

    if ((number > 99) && (number < 1000) && (number % 100 < 10)) {
        result = `${numList.s1[Math.floor(number / 100)]} ${numList.s100[0]} ${numList.s1[number % 10]}`;
    }

    if ((number > 99) && (number < 1000) && (number % 100 > 9) && (number % 100 < 20)) {
        result = `${numList.s1[Math.floor(number / 100)]} ${numList.s100[0]} ${numList.s10[number % 100 - 10]}`;
    }

    if ((number > 99) && (number < 1000) && (number % 100 > 19)) {
        result = `${numList.s1[Math.floor(number / 100)]} ${numList.s100[0]} ${numList.s20[Math.floor(number / 10) % 10]} ${numList.s1[number % 10]}`;
    }
    
    return result.trim();
}
