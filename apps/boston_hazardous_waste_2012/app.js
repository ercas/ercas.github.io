var map = L.map("map").setView([42.3235, -71.0865], 12);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

function dict_to_html(dict) {
    var html = "";
    var first = true;
    for (var key in dict) {
        if (!first) {
            html = html + "<br>";
        }
        html = html + key + ": " + dict[key];
        first = false;
    }
    return html;
}

var geojson = L.geoJSON(geo, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(dict_to_html(feature.properties));
    }
});
geojson.addTo(map);
