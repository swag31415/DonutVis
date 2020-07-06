function gen_colors(num) {
    var result = []
    for (let i = 0; i < num; i++) {
        result.push('#'+Math.floor(Math.random()*16777215).toString(16))
    }
    return result
}