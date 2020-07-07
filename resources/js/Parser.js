function getNames(folder) {
    return folder.folders.map(f => f.name) // All the folder names
            .concat(folder.files.map(f => f.name + f.ext)) // AND all the file names
}

function getSizes(folder) {
    return folder.folders.map(f => f.size) // All the folder sizes
            .concat(folder.files.map(f => f.size)) // AND all the file sizes
}

function get_types(folder) {
    var result = new Set()
    folder.files.forEach(f => result.add(f.ext))
    folder.folders.forEach(f => {
        get_types(f).forEach(g => result.add(g))
    })
    return [...result]
}

function get_size_by_extension(folder, extension) {
    size = 0
    folder.files.filter(f => f.ext == extension)
                .forEach(f => size += f.size)
    folder.folders.map(f => get_size_by_extension(f, extension))
                .forEach(s => size += s)
    return size
}

function get_sizes_by_type(folder) {
    var types = get_types(folder)
    var sizes = []
    for (let i = 0; i < types.length; i++) {
        sizes[i] = get_size_by_extension(folder, types[i]);
    }
    return sizes
}

function gen_data(folder, by_ext = false) {
    var names = getNames(folder)
    var sizes = getSizes(folder)
    if (by_ext) {
        names = get_types(folder)
        sizes = get_sizes_by_type(folder)
    }
    return {
        labels: names,
        datasets: [{
          label: folder.name,
          backgroundColor: pattern.generate(gen_colors(names.length)),
          data: sizes
        }]
    }
}