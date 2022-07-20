var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_burg_1 = new ol.format.GeoJSON();
var features_burg_1 = format_burg_1.readFeatures(json_burg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_burg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_burg_1.addFeatures(features_burg_1);
var lyr_burg_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_burg_1, 
                style: style_burg_1,
                interactive: true,
                title: '<img src="styles/legend/burg_1.png" /> burg'
            });
var format_kirchen_2 = new ol.format.GeoJSON();
var features_kirchen_2 = format_kirchen_2.readFeatures(json_kirchen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kirchen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kirchen_2.addFeatures(features_kirchen_2);
var lyr_kirchen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kirchen_2, 
                style: style_kirchen_2,
                interactive: true,
    title: 'kirchen<br />\
    <img src="styles/legend/kirchen_2_0.png" /> 0<br />\
    <img src="styles/legend/kirchen_2_1.png" /> 1<br />\
    <img src="styles/legend/kirchen_2_2.png" /> <br />'
        });

lyr_2gisMap_0.setVisible(true);lyr_burg_1.setVisible(true);lyr_kirchen_2.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_burg_1,lyr_kirchen_2];
lyr_burg_1.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_kirchen_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'exists': 'exists', 'page': 'page', });
lyr_burg_1.set('fieldImages', {'id': 'TextEdit', 'label': 'TextEdit', });
lyr_kirchen_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'exists': 'Range', 'page': 'TextEdit', });
lyr_burg_1.set('fieldLabels', {'id': 'no label', 'label': 'header label', });
lyr_kirchen_2.set('fieldLabels', {'id': 'no label', 'name': 'header label', 'exists': 'inline label', 'page': 'no label', });
lyr_kirchen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});