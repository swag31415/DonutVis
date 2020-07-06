function getNames(folder) {
    return folder.folders.map(f => f.name) // All the folder names
            .concat(folder.files.map(f => f.name)) // AND all the file names
}

function getSizes(folder) {
    return folder.folders.map(f => f.size) // All the folder sizes
            .concat(folder.files.map(f => f.size)) // AND all the file sizes
}

function gen_data(folder) {
    var names = getNames(folder)
    return {
        labels: names,
        datasets: [{
          label: folder.name,
          backgroundColor: pattern.generate(gen_colors(names.length)),
          data: getSizes(folder)
        }]
    }
}