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

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Germansin1897_2 = new ol.format.GeoJSON();
var features_Germansin1897_2 = format_Germansin1897_2.readFeatures(json_Germansin1897_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germansin1897_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germansin1897_2.addFeatures(features_Germansin1897_2);
var lyr_Germansin1897_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germansin1897_2, 
                style: style_Germansin1897_2,
                interactive: true,
    title: 'Germans in 1897, %<br />\
    <img src="styles/legend/Germansin1897_2_0.png" /> 0 - 10<br />\
    <img src="styles/legend/Germansin1897_2_1.png" /> 10 - 20<br />\
    <img src="styles/legend/Germansin1897_2_2.png" /> 20 - 30<br />\
    <img src="styles/legend/Germansin1897_2_3.png" /> 30 - 40<br />\
    <img src="styles/legend/Germansin1897_2_4.png" /> 40 - 50<br />\
    <img src="styles/legend/Germansin1897_2_5.png" /> 50 - 60<br />\
    <img src="styles/legend/Germansin1897_2_6.png" /> 60 - 70<br />\
    <img src="styles/legend/Germansin1897_2_7.png" /> 70 - 80<br />\
    <img src="styles/legend/Germansin1897_2_8.png" /> 80 - 90<br />\
    <img src="styles/legend/Germansin1897_2_9.png" /> 90 - 100<br />'
        });
var format_Ironploughsperhousehold1913_3 = new ol.format.GeoJSON();
var features_Ironploughsperhousehold1913_3 = format_Ironploughsperhousehold1913_3.readFeatures(json_Ironploughsperhousehold1913_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ironploughsperhousehold1913_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ironploughsperhousehold1913_3.addFeatures(features_Ironploughsperhousehold1913_3);
var lyr_Ironploughsperhousehold1913_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ironploughsperhousehold1913_3, 
                style: style_Ironploughsperhousehold1913_3,
                interactive: true,
    title: 'Iron ploughs per household, 1913<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_0.png" /> 0 - 0.13<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_1.png" /> 0.13 - 0.26<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_2.png" /> 0.26 - 0.4<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_3.png" /> 0.4 - 0.55<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_4.png" /> 0.55 - 0.71<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_5.png" /> 0.71 - 0.89<br />\
    <img src="styles/legend/Ironploughsperhousehold1913_3_6.png" /> 0.89 - 1.33<br />'
        });
var format_Fanningmillsperhousehold1913_4 = new ol.format.GeoJSON();
var features_Fanningmillsperhousehold1913_4 = format_Fanningmillsperhousehold1913_4.readFeatures(json_Fanningmillsperhousehold1913_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fanningmillsperhousehold1913_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fanningmillsperhousehold1913_4.addFeatures(features_Fanningmillsperhousehold1913_4);
var lyr_Fanningmillsperhousehold1913_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fanningmillsperhousehold1913_4, 
                style: style_Fanningmillsperhousehold1913_4,
                interactive: true,
    title: 'Fanning mills per household, 1913<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_0.png" /> 0 - 0.035<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_1.png" /> 0.035 - 0.085<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_2.png" /> 0.085 - 0.155<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_3.png" /> 0.155 - 0.238<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_4.png" /> 0.238 - 0.338<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_5.png" /> 0.338 - 0.5<br />\
    <img src="styles/legend/Fanningmillsperhousehold1913_4_6.png" /> 0.5 - 0.704<br />'
        });
var format_Craftsmenin1917_5 = new ol.format.GeoJSON();
var features_Craftsmenin1917_5 = format_Craftsmenin1917_5.readFeatures(json_Craftsmenin1917_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Craftsmenin1917_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Craftsmenin1917_5.addFeatures(features_Craftsmenin1917_5);
var lyr_Craftsmenin1917_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Craftsmenin1917_5, 
                style: style_Craftsmenin1917_5,
                interactive: true,
    title: 'Craftsmen in 1917, %<br />\
    <img src="styles/legend/Craftsmenin1917_5_0.png" /> 0 - 3.8<br />\
    <img src="styles/legend/Craftsmenin1917_5_1.png" /> 3.8 - 7.9<br />\
    <img src="styles/legend/Craftsmenin1917_5_2.png" /> 7.9 - 13.1<br />\
    <img src="styles/legend/Craftsmenin1917_5_3.png" /> 13.1 - 23.4<br />\
    <img src="styles/legend/Craftsmenin1917_5_4.png" /> 23.4 - 38.7<br />\
    <img src="styles/legend/Craftsmenin1917_5_5.png" /> 38.7 - 61.9<br />\
    <img src="styles/legend/Craftsmenin1917_5_6.png" /> 61.9 - 74.4<br />'
        });
var format_Populationdensityin1763districts_6 = new ol.format.GeoJSON();
var features_Populationdensityin1763districts_6 = format_Populationdensityin1763districts_6.readFeatures(json_Populationdensityin1763districts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Populationdensityin1763districts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populationdensityin1763districts_6.addFeatures(features_Populationdensityin1763districts_6);
var lyr_Populationdensityin1763districts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Populationdensityin1763districts_6, 
                style: style_Populationdensityin1763districts_6,
                interactive: true,
    title: 'Population density in 1763, districts<br />\
    <img src="styles/legend/Populationdensityin1763districts_6_0.png" /> 0 - 2<br />\
    <img src="styles/legend/Populationdensityin1763districts_6_1.png" /> 2 - 4<br />\
    <img src="styles/legend/Populationdensityin1763districts_6_2.png" /> 4 - 6<br />\
    <img src="styles/legend/Populationdensityin1763districts_6_3.png" /> 6 - 8<br />\
    <img src="styles/legend/Populationdensityin1763districts_6_4.png" /> 8 - 10<br />'
        });
var format_Districtborders_7 = new ol.format.GeoJSON();
var features_Districtborders_7 = format_Districtborders_7.readFeatures(json_Districtborders_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtborders_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtborders_7.addFeatures(features_Districtborders_7);
var lyr_Districtborders_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districtborders_7, 
                style: style_Districtborders_7,
                interactive: false,
                title: '<img src="styles/legend/Districtborders_7.png" /> District borders'
            });
var format_Germansettlementareabythe1764Law_8 = new ol.format.GeoJSON();
var features_Germansettlementareabythe1764Law_8 = format_Germansettlementareabythe1764Law_8.readFeatures(json_Germansettlementareabythe1764Law_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germansettlementareabythe1764Law_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germansettlementareabythe1764Law_8.addFeatures(features_Germansettlementareabythe1764Law_8);
var lyr_Germansettlementareabythe1764Law_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germansettlementareabythe1764Law_8, 
                style: style_Germansettlementareabythe1764Law_8,
                interactive: false,
                title: '<img src="styles/legend/Germansettlementareabythe1764Law_8.png" /> German settlement area by the 1764 Law'
            });
var format_The1764Lawreferencepoints_9 = new ol.format.GeoJSON();
var features_The1764Lawreferencepoints_9 = format_The1764Lawreferencepoints_9.readFeatures(json_The1764Lawreferencepoints_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_The1764Lawreferencepoints_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_The1764Lawreferencepoints_9.addFeatures(features_The1764Lawreferencepoints_9);
var lyr_The1764Lawreferencepoints_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_The1764Lawreferencepoints_9, 
                style: style_The1764Lawreferencepoints_9,
                interactive: true,
                title: '<img src="styles/legend/The1764Lawreferencepoints_9.png" /> The 1764 Law reference points'
            });
var format_Rivers_10 = new ol.format.GeoJSON();
var features_Rivers_10 = format_Rivers_10.readFeatures(json_Rivers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_10.addFeatures(features_Rivers_10);
var lyr_Rivers_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rivers_10, 
                style: style_Rivers_10,
                interactive: false,
                title: '<img src="styles/legend/Rivers_10.png" /> Rivers'
            });
var format_Germanpolygon_11 = new ol.format.GeoJSON();
var features_Germanpolygon_11 = format_Germanpolygon_11.readFeatures(json_Germanpolygon_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germanpolygon_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germanpolygon_11.addFeatures(features_Germanpolygon_11);
var lyr_Germanpolygon_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germanpolygon_11, 
                style: style_Germanpolygon_11,
                interactive: false,
                title: '<img src="styles/legend/Germanpolygon_11.png" /> German polygon'
            });
var format_Railroadin1913_12 = new ol.format.GeoJSON();
var features_Railroadin1913_12 = format_Railroadin1913_12.readFeatures(json_Railroadin1913_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railroadin1913_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railroadin1913_12.addFeatures(features_Railroadin1913_12);
var lyr_Railroadin1913_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railroadin1913_12, 
                style: style_Railroadin1913_12,
                interactive: false,
                title: '<img src="styles/legend/Railroadin1913_12.png" /> Railroad in 1913'
            });
var format_Germansettlementspopulation_13 = new ol.format.GeoJSON();
var features_Germansettlementspopulation_13 = format_Germansettlementspopulation_13.readFeatures(json_Germansettlementspopulation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germansettlementspopulation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germansettlementspopulation_13.addFeatures(features_Germansettlementspopulation_13);
var lyr_Germansettlementspopulation_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Germansettlementspopulation_13, 
                style: style_Germansettlementspopulation_13,
                interactive: true,
    title: 'German settlements, population<br />\
    <img src="styles/legend/Germansettlementspopulation_13_0.png" /> 220 - 2063<br />\
    <img src="styles/legend/Germansettlementspopulation_13_1.png" /> 2063 - 3677<br />\
    <img src="styles/legend/Germansettlementspopulation_13_2.png" /> 3677 - 6292<br />\
    <img src="styles/legend/Germansettlementspopulation_13_3.png" /> 6292 - 9859<br />\
    <img src="styles/legend/Germansettlementspopulation_13_4.png" /> 9859 - 14136<br />'
        });
var format_Ruralfairsin1913days_14 = new ol.format.GeoJSON();
var features_Ruralfairsin1913days_14 = format_Ruralfairsin1913days_14.readFeatures(json_Ruralfairsin1913days_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruralfairsin1913days_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruralfairsin1913days_14.addFeatures(features_Ruralfairsin1913days_14);
var lyr_Ruralfairsin1913days_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ruralfairsin1913days_14, 
                style: style_Ruralfairsin1913days_14,
                interactive: true,
    title: 'Rural fairs in 1913, days<br />\
    <img src="styles/legend/Ruralfairsin1913days_14_0.png" /> 1 - 3<br />\
    <img src="styles/legend/Ruralfairsin1913days_14_1.png" /> 3 - 7<br />\
    <img src="styles/legend/Ruralfairsin1913days_14_2.png" /> 7 - 10<br />\
    <img src="styles/legend/Ruralfairsin1913days_14_3.png" /> 10 - 14<br />\
    <img src="styles/legend/Ruralfairsin1913days_14_4.png" /> 14 - 21<br />\
    <img src="styles/legend/Ruralfairsin1913days_14_5.png" /> 21 - 30<br />'
        });
var format_Towns_15 = new ol.format.GeoJSON();
var features_Towns_15 = format_Towns_15.readFeatures(json_Towns_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towns_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_15.addFeatures(features_Towns_15);
var lyr_Towns_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Towns_15, 
                style: style_Towns_15,
                interactive: true,
                title: '<img src="styles/legend/Towns_15.png" /> Towns'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_Germansin1897_2.setVisible(true);lyr_Ironploughsperhousehold1913_3.setVisible(false);lyr_Fanningmillsperhousehold1913_4.setVisible(false);lyr_Craftsmenin1917_5.setVisible(false);lyr_Populationdensityin1763districts_6.setVisible(false);lyr_Districtborders_7.setVisible(false);lyr_Germansettlementareabythe1764Law_8.setVisible(false);lyr_The1764Lawreferencepoints_9.setVisible(false);lyr_Rivers_10.setVisible(false);lyr_Germanpolygon_11.setVisible(false);lyr_Railroadin1913_12.setVisible(true);lyr_Germansettlementspopulation_13.setVisible(false);lyr_Ruralfairsin1913days_14.setVisible(true);lyr_Towns_15.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_Germansin1897_2,lyr_Ironploughsperhousehold1913_3,lyr_Fanningmillsperhousehold1913_4,lyr_Craftsmenin1917_5,lyr_Populationdensityin1763districts_6,lyr_Districtborders_7,lyr_Germansettlementareabythe1764Law_8,lyr_The1764Lawreferencepoints_9,lyr_Rivers_10,lyr_Germanpolygon_11,lyr_Railroadin1913_12,lyr_Germansettlementspopulation_13,lyr_Ruralfairsin1913days_14,lyr_Towns_15];
lyr_Germansin1897_2.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'Germans in 1897, %', 'data_iron_ploughs_phh_13': 'Iron ploughs per household, 1913', 'data_winnowers_phh_13': 'Fanning mills per household, 1913', 'data_total_craftsmen_phh': 'Craftsmen, 1917', });
lyr_Ironploughsperhousehold1913_3.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'Germans in 1897, %', 'data_iron_ploughs_phh_13': 'Iron ploughs per household, 1913', 'data_winnowers_phh_13': 'data_winnowers_phh_13', 'data_total_craftsmen_phh': 'data_total_craftsmen_phh', });
lyr_Fanningmillsperhousehold1913_4.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'data_germans', 'data_iron_ploughs_phh_13': 'data_iron_ploughs_phh_13', 'data_winnowers_phh_13': 'Fanning mills per household, 1913', 'data_total_craftsmen_phh': 'data_total_craftsmen_phh', });
lyr_Craftsmenin1917_5.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'volost': 'Volost', 'town': 'town', 'germans_du': 'germans_du', 'capital': 'capital', 'data_germans': 'data_germans', 'data_iron_ploughs_phh_13': 'data_iron_ploughs_phh_13', 'data_winnowers_phh_13': 'data_winnowers_phh_13', 'data_total_craftsmen_phh': 'Craftsmen in 1917, % of households', });
lyr_Populationdensityin1763districts_6.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'dist_dens1763': 'Population density in 1763, per sq. km', });
lyr_Districtborders_7.set('fieldAliases', {'Id': 'Id', 'uezd': 'Uezd', 'dist_dens1763': 'Population density in 1763, per sq. km', });
lyr_Germansettlementareabythe1764Law_8.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_The1764Lawreferencepoints_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Rivers_10.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Germanpolygon_11.set('fieldAliases', {'Id': 'Id', 'area': 'area', });
lyr_Railroadin1913_12.set('fieldAliases', {'id': 'id', });
lyr_Germansettlementspopulation_13.set('fieldAliases', {'id': 'id', 'name_rus': 'Name (Russian)', 'name_ger': 'Name (German)', 'Volost': 'Volost', 'Year': 'Year established', 'Population': 'Population in 1913', });
lyr_Ruralfairsin1913days_14.set('fieldAliases', {'id': 'id', 'Village': 'Village', 'uezd': 'Uezd (Russian)', 'Days': 'Days', 'uezd_eng': 'Uezd (English)', });
lyr_Towns_15.set('fieldAliases', {'id': 'id', 'town': 'Town', 'Population': 'Population in 1910', });
lyr_Germansin1897_2.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'TextEdit', 'data_iron_ploughs_phh_13': 'Hidden', 'data_winnowers_phh_13': 'Hidden', 'data_total_craftsmen_phh': 'Hidden', });
lyr_Ironploughsperhousehold1913_3.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'Hidden', 'data_iron_ploughs_phh_13': 'TextEdit', 'data_winnowers_phh_13': 'Hidden', 'data_total_craftsmen_phh': 'Hidden', });
lyr_Fanningmillsperhousehold1913_4.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'Hidden', 'data_iron_ploughs_phh_13': 'Hidden', 'data_winnowers_phh_13': 'TextEdit', 'data_total_craftsmen_phh': 'Hidden', });
lyr_Craftsmenin1917_5.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'volost': 'TextEdit', 'town': 'Hidden', 'germans_du': 'Hidden', 'capital': 'Hidden', 'data_germans': 'Hidden', 'data_iron_ploughs_phh_13': 'Hidden', 'data_winnowers_phh_13': 'Hidden', 'data_total_craftsmen_phh': 'TextEdit', });
lyr_Populationdensityin1763districts_6.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'dist_dens1763': 'TextEdit', });
lyr_Districtborders_7.set('fieldImages', {'Id': 'Hidden', 'uezd': 'TextEdit', 'dist_dens1763': 'TextEdit', });
lyr_Germansettlementareabythe1764Law_8.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', });
lyr_The1764Lawreferencepoints_9.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', });
lyr_Rivers_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Germanpolygon_11.set('fieldImages', {'Id': 'Range', 'area': '', });
lyr_Railroadin1913_12.set('fieldImages', {'id': 'TextEdit', });
lyr_Germansettlementspopulation_13.set('fieldImages', {'id': 'Hidden', 'name_rus': 'TextEdit', 'name_ger': 'TextEdit', 'Volost': 'TextEdit', 'Year': 'TextEdit', 'Population': 'TextEdit', });
lyr_Ruralfairsin1913days_14.set('fieldImages', {'id': 'Hidden', 'Village': 'TextEdit', 'uezd': 'Hidden', 'Days': 'TextEdit', 'uezd_eng': 'Hidden', });
lyr_Towns_15.set('fieldImages', {'id': 'Hidden', 'town': 'TextEdit', 'Population': 'TextEdit', });
lyr_Germansin1897_2.set('fieldLabels', {'uezd': 'inline label', 'volost': 'inline label', 'data_germans': 'inline label', });
lyr_Ironploughsperhousehold1913_3.set('fieldLabels', {'uezd': 'inline label', 'volost': 'inline label', 'data_iron_ploughs_phh_13': 'inline label', });
lyr_Fanningmillsperhousehold1913_4.set('fieldLabels', {'uezd': 'inline label', 'volost': 'inline label', 'data_winnowers_phh_13': 'inline label', });
lyr_Craftsmenin1917_5.set('fieldLabels', {'uezd': 'inline label', 'volost': 'inline label', 'data_total_craftsmen_phh': 'inline label', });
lyr_Populationdensityin1763districts_6.set('fieldLabels', {'uezd': 'inline label', 'dist_dens1763': 'inline label', });
lyr_Districtborders_7.set('fieldLabels', {'uezd': 'inline label', 'dist_dens1763': 'inline label', });
lyr_Germansettlementareabythe1764Law_8.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_The1764Lawreferencepoints_9.set('fieldLabels', {'name': 'no label', });
lyr_Rivers_10.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Germanpolygon_11.set('fieldLabels', {'Id': 'no label', 'area': 'no label', });
lyr_Railroadin1913_12.set('fieldLabels', {'id': 'no label', });
lyr_Germansettlementspopulation_13.set('fieldLabels', {'name_rus': 'inline label', 'name_ger': 'inline label', 'Volost': 'inline label', 'Year': 'inline label', 'Population': 'inline label', });
lyr_Ruralfairsin1913days_14.set('fieldLabels', {'Village': 'inline label', 'Days': 'inline label', });
lyr_Towns_15.set('fieldLabels', {'town': 'no label', 'Population': 'inline label', });
lyr_Towns_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});