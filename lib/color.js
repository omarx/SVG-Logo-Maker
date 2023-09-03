function isValidColor(str) {
    const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    const namedColors = [
        'red', 'blue', 'green', 'yellow', 'white', 'black', 
        'orange', 'purple', 'pink', 'gray', 'cyan', 'magenta'
    ];
    return hexPattern.test(str) || namedColors.includes(str.toLowerCase());
}


module.exports={
    isValidColor
}