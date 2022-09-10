var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.745000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Germans_1 = new ol.format.GeoJSON();
var features_Germans_1 = format_Germans_1.readFeatures(json_Germans_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germans_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germans_1.addFeatures(features_Germans_1);
var lyr_Germans_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germans_1, 
                style: style_Germans_1,
                interactive: true,
    title: 'Germans, %<br />\
    <img src="styles/legend/Germans_1_0.png" /> 0 - 0.1<br />\
    <img src="styles/legend/Germans_1_1.png" /> 0.1 - 0.2<br />\
    <img src="styles/legend/Germans_1_2.png" /> 0.2 - 0.3<br />\
    <img src="styles/legend/Germans_1_3.png" /> 0.3 - 0.4<br />\
    <img src="styles/legend/Germans_1_4.png" /> 0.4 - 0.5<br />\
    <img src="styles/legend/Germans_1_5.png" /> 0.5 - 0.6<br />\
    <img src="styles/legend/Germans_1_6.png" /> 0.6 - 0.7<br />\
    <img src="styles/legend/Germans_1_7.png" /> 0.7 - 0.8<br />\
    <img src="styles/legend/Germans_1_8.png" /> 0.8 - 0.9<br />\
    <img src="styles/legend/Germans_1_9.png" /> 0.9 - 1<br />'
        });
var format_Ironploughsperhousehold1913_2 = new ol.format.GeoJSON();
var features_Ironploughsperhousehold1913_2 = format_Ironploughsperhousehold1913_2.readFeatures(json_Ironploughsperhousehold1913_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ironploughsperhousehold1913_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ironploughsperhousehold1913_2.addFeatures(features_Ironploughsperhousehold1913_2);
var lyr_Ironploughsperhousehold1913_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ironploughsperhousehold1913_2, 
                style: style_Ironploughsperhousehold1913_2,
                interactive: true,
    title: 'Iron ploughs per household, 1913<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_0.png" /> 0 - 0.13<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_1.png" /> 0.13 - 0.26<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_2.png" /> 0.26 - 0.4<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_3.png" /> 0.4 - 0.55<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_4.png" /> 0.55 - 0.71<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_5.png" /> 0.71 - 0.89<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_2_6.png" /> 0.89 - 1.33<br />'
        });
var format_Fanningmillsperhousehold1913_3 = new ol.format.GeoJSON();
var features_Fanningmillsperhousehold1913_3 = format_Fanningmillsperhousehold1913_3.readFeatures(json_Fanningmillsperhousehold1913_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fanningmillsperhousehold1913_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fanningmillsperhousehold1913_3.addFeatures(features_Fanningmillsperhousehold1913_3);
var lyr_Fanningmillsperhousehold1913_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fanningmillsperhousehold1913_3, 
                style: style_Fanningmillsperhousehold1913_3,
                interactive: true,
    title: 'Fanning mills per household, 1913<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_0.png" /> 0 - 0.035<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_1.png" /> 0.035 - 0.085<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_2.png" /> 0.085 - 0.155<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_3.png" /> 0.155 - 0.238<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_4.png" /> 0.238 - 0.338<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_5.png" /> 0.338 - 0.5<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_3_6.png" /> 0.5 - 0.704<br />'
        });
var format_Craftsmen_4 = new ol.format.GeoJSON();
var features_Craftsmen_4 = format_Craftsmen_4.readFeatures(json_Craftsmen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Craftsmen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Craftsmen_4.addFeatures(features_Craftsmen_4);
var lyr_Craftsmen_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Craftsmen_4, 
                style: style_Craftsmen_4,
                interactive: true,
    title: 'Craftsmen, %<br />\
    <img src="styles/legend/Craftsmen_4_0.png" /> 0 - 3.8<br />\
    <img src="styles/legend/Craftsmen_4_1.png" /> 3.8 - 7.9<br />\
    <img src="styles/legend/Craftsmen_4_2.png" /> 7.9 - 13.1<br />\
    <img src="styles/legend/Craftsmen_4_3.png" /> 13.1 - 23.4<br />\
    <img src="styles/legend/Craftsmen_4_4.png" /> 23.4 - 38.7<br />\
    <img src="styles/legend/Craftsmen_4_5.png" /> 38.7 - 61.9<br />\
    <img src="styles/legend/Craftsmen_4_6.png" /> 61.9 - 74.4<br />'
        });
var format_Germansettlementareabythe1764Law_5 = new ol.format.GeoJSON();
var features_Germansettlementareabythe1764Law_5 = format_Germansettlementareabythe1764Law_5.readFeatures(json_Germansettlementareabythe1764Law_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germansettlementareabythe1764Law_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germansettlementareabythe1764Law_5.addFeatures(features_Germansettlementareabythe1764Law_5);
var lyr_Germansettlementareabythe1764Law_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germansettlementareabythe1764Law_5, 
                style: style_Germansettlementareabythe1764Law_5,
                interactive: false,
                title: '<img src="styles/legend/Germansettlementareabythe1764Law_5.png" /> German settlement area by the 1764 Law'
            });
var format_The1764Lawreferencepoints_6 = new ol.format.GeoJSON();
var features_The1764Lawreferencepoints_6 = format_The1764Lawreferencepoints_6.readFeatures(json_The1764Lawreferencepoints_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_The1764Lawreferencepoints_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_The1764Lawreferencepoints_6.addFeatures(features_The1764Lawreferencepoints_6);
var lyr_The1764Lawreferencepoints_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_The1764Lawreferencepoints_6, 
                style: style_The1764Lawreferencepoints_6,
                interactive: true,
                title: '<img src="styles/legend/The1764Lawreferencepoints_6.png" /> The 1764 Law reference points'
            });
var format_Rivers_7 = new ol.format.GeoJSON();
var features_Rivers_7 = format_Rivers_7.readFeatures(json_Rivers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_7.addFeatures(features_Rivers_7);
var lyr_Rivers_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rivers_7, 
                style: style_Rivers_7,
                interactive: false,
                title: '<img src="styles/legend/Rivers_7.png" /> Rivers'
            });
var format_Germanpolygon_8 = new ol.format.GeoJSON();
var features_Germanpolygon_8 = format_Germanpolygon_8.readFeatures(json_Germanpolygon_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germanpolygon_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germanpolygon_8.addFeatures(features_Germanpolygon_8);
var lyr_Germanpolygon_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germanpolygon_8, 
                style: style_Germanpolygon_8,
                interactive: false,
                title: '<img src="styles/legend/Germanpolygon_8.png" /> German polygon'
            });
var format_Railroadin1913_9 = new ol.format.GeoJSON();
var features_Railroadin1913_9 = format_Railroadin1913_9.readFeatures(json_Railroadin1913_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railroadin1913_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railroadin1913_9.addFeatures(features_Railroadin1913_9);
var lyr_Railroadin1913_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railroadin1913_9, 
                style: style_Railroadin1913_9,
                interactive: false,
                title: '<img src="styles/legend/Railroadin1913_9.png" /> Railroad in 1913'
            });
var format_Germansettlements_10 = new ol.format.GeoJSON();
var features_Germansettlements_10 = format_Germansettlements_10.readFeatures(json_Germansettlements_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germansettlements_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germansettlements_10.addFeatures(features_Germansettlements_10);
var lyr_Germansettlements_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germansettlements_10, 
                style: style_Germansettlements_10,
                interactive: true,
    title: 'German settlements<br />\
    <img src="styles/legend/Germansettlements_10_0.png" /> 220 - 2063<br />\
    <img src="styles/legend/Germansettlements_10_1.png" /> 2063 - 3677<br />\
    <img src="styles/legend/Germansettlements_10_2.png" /> 3677 - 6292<br />\
    <img src="styles/legend/Germansettlements_10_3.png" /> 6292 - 9859<br />\
    <img src="styles/legend/Germansettlements_10_4.png" /> 9859 - 14136<br />'
        });
var format_Fairsin1913_11 = new ol.format.GeoJSON();
var features_Fairsin1913_11 = format_Fairsin1913_11.readFeatures(json_Fairsin1913_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fairsin1913_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fairsin1913_11.addFeatures(features_Fairsin1913_11);
var lyr_Fairsin1913_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fairsin1913_11, 
                style: style_Fairsin1913_11,
                interactive: true,
    title: 'Fairs in 1913<br />\
    <img src="styles/legend/Fairsin1913_11_0.png" /> 1 - 3<br />\
    <img src="styles/legend/Fairsin1913_11_1.png" /> 3 - 7<br />\
    <img src="styles/legend/Fairsin1913_11_2.png" /> 7 - 10<br />\
    <img src="styles/legend/Fairsin1913_11_3.png" /> 10 - 14<br />\
    <img src="styles/legend/Fairsin1913_11_4.png" /> 14 - 21<br />\
    <img src="styles/legend/Fairsin1913_11_5.png" /> 21 - 30<br />'
        });
var format_Towns_12 = new ol.format.GeoJSON();
var features_Towns_12 = format_Towns_12.readFeatures(json_Towns_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towns_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_12.addFeatures(features_Towns_12);
var lyr_Towns_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Towns_12, 
                style: style_Towns_12,
                interactive: false,
                title: '<img src="styles/legend/Towns_12.png" /> Towns'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Germans_1.setVisible(true);lyr_Ironploughsperhousehold1913_2.setVisible(false);lyr_Fanningmillsperhousehold1913_3.setVisible(false);lyr_Craftsmen_4.setVisible(false);lyr_Germansettlementareabythe1764Law_5.setVisible(false);lyr_The1764Lawreferencepoints_6.setVisible(false);lyr_Rivers_7.setVisible(false);lyr_Germanpolygon_8.setVisible(false);lyr_Railroadin1913_9.setVisible(true);lyr_Germansettlements_10.setVisible(false);lyr_Fairsin1913_11.setVisible(true);lyr_Towns_12.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Germans_1,lyr_Ironploughsperhousehold1913_2,lyr_Fanningmillsperhousehold1913_3,lyr_Craftsmen_4,lyr_Germansettlementareabythe1764Law_5,lyr_The1764Lawreferencepoints_6,lyr_Rivers_7,lyr_Germanpolygon_8,lyr_Railroadin1913_9,lyr_Germansettlements_10,lyr_Fairsin1913_11,lyr_Towns_12];
lyr_Germans_1.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'Germans in 1897, %', 'data_iron_ploughs_phh_13': 'Iron ploughs per household, 1913', 'data_winnowers_phh_13': 'Fanning mills per household, 1913', 'data_total_craftsmen_phh': 'Craftsmen, 1917', });
lyr_Ironploughsperhousehold1913_2.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'Germans in 1897, %', 'data_iron_ploughs_phh_13': 'Iron ploughs per household, 1913', 'data_winnowers_phh_13': 'data_winnowers_phh_13', 'data_total_craftsmen_phh': 'data_total_craftsmen_phh', });
lyr_Fanningmillsperhousehold1913_3.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'data_germans', 'data_iron_ploughs_phh_13': 'data_iron_ploughs_phh_13', 'data_winnowers_phh_13': 'Fanning mills per household, 1913', 'data_total_craftsmen_phh': 'data_total_craftsmen_phh', });
lyr_Craftsmen_4.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'data_germans', 'data_iron_ploughs_phh_13': 'data_iron_ploughs_phh_13', 'data_winnowers_phh_13': 'data_winnowers_phh_13', 'data_total_craftsmen_phh': 'Craftsmen in 1917, % of households', });
lyr_Germansettlementareabythe1764Law_5.set('fieldAliases', {'id': 'id', 'area': 'area', 'all_mean': 'all_mean', });
lyr_The1764Lawreferencepoints_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Rivers_7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Germanpolygon_8.set('fieldAliases', {'Id': 'Id', 'uezd': 'uezd', 'volost': 'volost', 'town': 'town', 'germans': 'germans', 'capital': 'capital', 'data_germa': 'data_germa', 'data_iron_': 'data_iron_', 'data_winno': 'data_winno', 'data_total': 'data_total', });
lyr_Railroadin1913_9.set('fieldAliases', {'id': 'id', });
lyr_Germansettlements_10.set('fieldAliases', {'id': 'id', 'name_rus': 'Name (Russian)', 'name_ger': 'Name (German)', 'Volost': 'Volost', 'Year': 'Year established', 'Population': 'Population in 1913', });
lyr_Fairsin1913_11.set('fieldAliases', {'id': 'id', 'Village': 'Village', 'uezd': 'Uezd (Russian)', 'Days': 'Days', 'uezd_eng': 'Uezd (English)', });
lyr_Towns_12.set('fieldAliases', {'id': 'id', 'town': 'Town', });
lyr_Germans_1.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'TextEdit', 'data_iron_ploughs_phh_13': 'Hidden', 'data_winnowers_phh_13': 'Hidden', 'data_total_craftsmen_phh': 'Hidden', });
lyr_Ironploughsperhousehold1913_2.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'Hidden', 'data_iron_ploughs_phh_13': 'TextEdit', 'data_winnowers_phh_13': 'Hidden', 'data_total_craftsmen_phh': 'Hidden', });
lyr_Fanningmillsperhousehold1913_3.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'Hidden', 'data_iron_ploughs_phh_13': 'Hidden', 'data_winnowers_phh_13': 'TextEdit', 'data_total_craftsmen_phh': 'Hidden', });
lyr_Craftsmen_4.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'Hidden', 'data_iron_ploughs_phh_13': 'Hidden', 'data_winnowers_phh_13': 'Hidden', 'data_total_craftsmen_phh': 'TextEdit', });
lyr_Germansettlementareabythe1764Law_5.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'all_mean': '', });
lyr_The1764Lawreferencepoints_6.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', });
lyr_Rivers_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Germanpolygon_8.set('fieldImages', {'Id': 'Range', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'TextEdit', 'germans': 'TextEdit', 'capital': 'TextEdit', 'data_germa': '', 'data_iron_': '', 'data_winno': '', 'data_total': '', });
lyr_Railroadin1913_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Germansettlements_10.set('fieldImages', {'id': 'Hidden', 'name_rus': 'TextEdit', 'name_ger': 'TextEdit', 'Volost': 'TextEdit', 'Year': 'TextEdit', 'Population': 'TextEdit', });
lyr_Fairsin1913_11.set('fieldImages', {'id': 'Hidden', 'Village': 'TextEdit', 'uezd': 'TextEdit', 'Days': 'TextEdit', 'uezd_eng': 'TextEdit', });
lyr_Towns_12.set('fieldImages', {'id': 'Hidden', 'town': 'TextEdit', });
lyr_Germans_1.set('fieldLabels', {'uezd': 'header label', 'volost': 'header label', 'data_germans': 'header label', });
lyr_Ironploughsperhousehold1913_2.set('fieldLabels', {'uezd': 'header label', 'volost': 'header label', 'data_iron_ploughs_phh_13': 'header label', });
lyr_Fanningmillsperhousehold1913_3.set('fieldLabels', {'uezd': 'header label', 'volost': 'header label', 'data_winnowers_phh_13': 'header label', });
lyr_Craftsmen_4.set('fieldLabels', {'uezd': 'header label', 'volost': 'header label', 'data_total_craftsmen_phh': 'header label', });
lyr_Germansettlementareabythe1764Law_5.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'all_mean': 'no label', });
lyr_The1764Lawreferencepoints_6.set('fieldLabels', {'name': 'no label', });
lyr_Rivers_7.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Germanpolygon_8.set('fieldLabels', {'Id': 'no label', 'uezd': 'no label', 'volost': 'no label', 'town': 'no label', 'germans': 'no label', 'capital': 'no label', 'data_germa': 'no label', 'data_iron_': 'no label', 'data_winno': 'no label', 'data_total': 'no label', });
lyr_Railroadin1913_9.set('fieldLabels', {'id': 'no label', });
lyr_Germansettlements_10.set('fieldLabels', {'name_rus': 'header label', 'name_ger': 'header label', 'Volost': 'header label', 'Year': 'header label', 'Population': 'header label', });
lyr_Fairsin1913_11.set('fieldLabels', {'Village': 'header label', 'uezd': 'header label', 'Days': 'header label', 'uezd_eng': 'header label', });
lyr_Towns_12.set('fieldLabels', {'town': 'no label', });
lyr_Towns_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});