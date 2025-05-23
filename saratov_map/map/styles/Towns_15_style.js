var size = 0;
var placement = 'point';

var style_Towns_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "rgba(255,255,255,0.75)";
    var bufferWidth = 3.75;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("town") !== null) {
        labelText = String(feature.get("town"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
