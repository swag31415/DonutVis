function getNames(folder) {
    return folder.folders.map(f => f.name) // All the folder names
            .concat(folder.files.map(f => f.name)) // AND all the file names
}

function getSizes(folder) {
    return folder.folders.map(f => f.size) // All the folder sizes
            .concat(folder.files.map(f => f.size)) // AND all the file sizes
}