exports.transformProps = (propString) => {
    if(!propString)
        return [];

    let splitString = propString.replace(/ /g,'').split(',');
    return splitString.map((item) => {
        let itemSplit = item.split(':');
        const type = itemSplit[1] || 'string';
        let nameSplit = itemSplit[0].split('?');
        const name = nameSplit[0];
        const isRequired = itemSplit[0][itemSplit[0].length - 1] !== '?';
        return { type, name, isRequired };
    })
};