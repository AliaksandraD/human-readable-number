module.exports = function toReadable(number) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let d = ['hundred'];



    function dozens(n) {
        if (n < 10) {
            return a[n];
        } else if (n >= 10 && n < 20) {
            return b[n - 10];
        } else {
            return c[Math.floor(n / 10)] + ' ' + a[n % 10];
        }
    }

    function hundreds(n) {
        return (n < 1000 && n >= 100) ? (a[Math.floor(n / 100)]) + ' '+d + ' ' + dozens(n % 100) : dozens(n);
        
    }

    function result(n) {
        return (n === 0) ? 'zero' : hundreds(n); 
    }

    return result(number).trim();
}
