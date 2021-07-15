export const utilsService = {
    sortNumbers,
    sortStrings,
    csvJSON,
    makeId,
    getRandomIntInclusive
}

function sortNumbers(list) {
    return list.sort((a, b) => a - b)
}

function sortStrings(list) {
    return list.sort((a, b) => (a > b) ? 1 : -1)
}

function csvJSON(csv) {

    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentline[j] && currentline[j].trim();
        }

        result.push(obj);
    }

    return result;
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
