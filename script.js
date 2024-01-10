var calculeitArea = function (radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return { radius: radius, area: area };
};
console.log(calculeitArea(12));
