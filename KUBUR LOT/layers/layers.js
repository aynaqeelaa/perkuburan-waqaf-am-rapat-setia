var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BOUNDARY_1 = new ol.format.GeoJSON();
var features_BOUNDARY_1 = format_BOUNDARY_1.readFeatures(json_BOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_1.addFeatures(features_BOUNDARY_1);
var lyr_BOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_1, 
                style: style_BOUNDARY_1,
                popuplayertitle: "BOUNDARY",
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_1.png" /> BOUNDARY'
            });
var format_KAWASANKUBUR_2 = new ol.format.GeoJSON();
var features_KAWASANKUBUR_2 = format_KAWASANKUBUR_2.readFeatures(json_KAWASANKUBUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKUBUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKUBUR_2.addFeatures(features_KAWASANKUBUR_2);
var lyr_KAWASANKUBUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKUBUR_2, 
                style: style_KAWASANKUBUR_2,
                popuplayertitle: "KAWASAN KUBUR",
                interactive: true,
                title: '<img src="styles/legend/KAWASANKUBUR_2.png" /> KAWASAN KUBUR'
            });
var format_JALANRAYA_3 = new ol.format.GeoJSON();
var features_JALANRAYA_3 = format_JALANRAYA_3.readFeatures(json_JALANRAYA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANRAYA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANRAYA_3.addFeatures(features_JALANRAYA_3);
var lyr_JALANRAYA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANRAYA_3, 
                style: style_JALANRAYA_3,
                popuplayertitle: "JALANRAYA",
                interactive: true,
                title: '<img src="styles/legend/JALANRAYA_3.png" /> JALANRAYA'
            });
var format_KUBUR_ALL_4 = new ol.format.GeoJSON();
var features_KUBUR_ALL_4 = format_KUBUR_ALL_4.readFeatures(json_KUBUR_ALL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KUBUR_ALL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KUBUR_ALL_4.addFeatures(features_KUBUR_ALL_4);
var lyr_KUBUR_ALL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KUBUR_ALL_4, 
                style: style_KUBUR_ALL_4,
                popuplayertitle: "KUBUR_ALL",
                interactive: true,
                title: '<img src="styles/legend/KUBUR_ALL_4.png" /> KUBUR_ALL'
            });
var format_LONGKANGKONKRIT_5 = new ol.format.GeoJSON();
var features_LONGKANGKONKRIT_5 = format_LONGKANGKONKRIT_5.readFeatures(json_LONGKANGKONKRIT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LONGKANGKONKRIT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LONGKANGKONKRIT_5.addFeatures(features_LONGKANGKONKRIT_5);
var lyr_LONGKANGKONKRIT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LONGKANGKONKRIT_5, 
                style: style_LONGKANGKONKRIT_5,
                popuplayertitle: "LONGKANG KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/LONGKANGKONKRIT_5.png" /> LONGKANG KONKRIT'
            });
var format_BANGUNAN_6 = new ol.format.GeoJSON();
var features_BANGUNAN_6 = format_BANGUNAN_6.readFeatures(json_BANGUNAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_6.addFeatures(features_BANGUNAN_6);
var lyr_BANGUNAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_6, 
                style: style_BANGUNAN_6,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_6.png" /> BANGUNAN'
            });
var format_PAGARKONKRIT_7 = new ol.format.GeoJSON();
var features_PAGARKONKRIT_7 = format_PAGARKONKRIT_7.readFeatures(json_PAGARKONKRIT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAGARKONKRIT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAGARKONKRIT_7.addFeatures(features_PAGARKONKRIT_7);
var lyr_PAGARKONKRIT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAGARKONKRIT_7, 
                style: style_PAGARKONKRIT_7,
                popuplayertitle: "PAGAR KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/PAGARKONKRIT_7.png" /> PAGAR KONKRIT'
            });
var format_PAPANTANDA_8 = new ol.format.GeoJSON();
var features_PAPANTANDA_8 = format_PAPANTANDA_8.readFeatures(json_PAPANTANDA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAPANTANDA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPANTANDA_8.addFeatures(features_PAPANTANDA_8);
var lyr_PAPANTANDA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAPANTANDA_8, 
                style: style_PAPANTANDA_8,
                popuplayertitle: "PAPAN TANDA",
                interactive: true,
                title: '<img src="styles/legend/PAPANTANDA_8.png" /> PAPAN TANDA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BOUNDARY_1.setVisible(true);lyr_KAWASANKUBUR_2.setVisible(true);lyr_JALANRAYA_3.setVisible(true);lyr_KUBUR_ALL_4.setVisible(true);lyr_LONGKANGKONKRIT_5.setVisible(true);lyr_BANGUNAN_6.setVisible(true);lyr_PAGARKONKRIT_7.setVisible(true);lyr_PAPANTANDA_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BOUNDARY_1,lyr_KAWASANKUBUR_2,lyr_JALANRAYA_3,lyr_KUBUR_ALL_4,lyr_LONGKANGKONKRIT_5,lyr_BANGUNAN_6,lyr_PAGARKONKRIT_7,lyr_PAPANTANDA_8];
lyr_BOUNDARY_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'boundary': 'boundary', });
lyr_KAWASANKUBUR_2.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'kawasan': 'kawasan', });
lyr_JALANRAYA_3.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'jalan': 'jalan', });
lyr_KUBUR_ALL_4.set('fieldAliases', {'qc_id': 'qc_id', 'lot': 'lot', 'nama': 'nama', 'tarikh kem': 'tarikh kem', 'jantina': 'jantina', 'layer': 'layer', });
lyr_LONGKANGKONKRIT_5.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'id': 'id', });
lyr_BANGUNAN_6.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'jenis bang': 'jenis bang', });
lyr_PAGARKONKRIT_7.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'pagar': 'pagar', });
lyr_PAPANTANDA_8.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'jnis tanda': 'jnis tanda', });
lyr_BOUNDARY_1.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'boundary': 'TextEdit', });
lyr_KAWASANKUBUR_2.set('fieldImages', {'qc_id_0': '', 'qc_id': 'TextEdit', 'kawasan': 'TextEdit', });
lyr_JALANRAYA_3.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'jalan': '', });
lyr_KUBUR_ALL_4.set('fieldImages', {'qc_id': '', 'lot': 'TextEdit', 'nama': '', 'tarikh kem': '', 'jantina': '', 'layer': 'TextEdit', });
lyr_LONGKANGKONKRIT_5.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'id': '', });
lyr_BANGUNAN_6.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'jenis bang': '', });
lyr_PAGARKONKRIT_7.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'pagar': '', });
lyr_PAPANTANDA_8.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'jnis tanda': '', });
lyr_BOUNDARY_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'boundary': 'no label', });
lyr_KAWASANKUBUR_2.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'kawasan': 'no label', });
lyr_JALANRAYA_3.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'jalan': 'no label', });
lyr_KUBUR_ALL_4.set('fieldLabels', {'qc_id': 'no label', 'lot': 'inline label - always visible', 'nama': 'inline label - always visible', 'tarikh kem': 'inline label - always visible', 'jantina': 'inline label - always visible', 'layer': 'inline label - always visible', });
lyr_LONGKANGKONKRIT_5.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'id': 'no label', });
lyr_BANGUNAN_6.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'jenis bang': 'no label', });
lyr_PAGARKONKRIT_7.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'pagar': 'no label', });
lyr_PAPANTANDA_8.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'jnis tanda': 'no label', });
lyr_PAPANTANDA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});