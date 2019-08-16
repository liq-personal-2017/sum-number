module.exports = (...args) => {
    args = args.flat(Infinity)
    return args.reduce((sum, num) => sum + num, 0)
}
