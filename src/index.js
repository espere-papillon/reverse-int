module.exports = function reverse(n) {
    if (n<0) n = -n;
    const s = n.toString().split('').reverse().join('');
    n = Number(s);
    return n;
}
