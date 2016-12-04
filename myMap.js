var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire" : 1480822665,
        "longitude" : -73.45,
        "latitude" : 40.75
    },
    {
        "pokemon_id" : 2,
        "expire" : 1480822665,
        "longitude" : -73.46,
        "latitude" : 40.75
    }
]

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AjZmbGB9OLnThq1IWaOe8EqA1ivi2lExihwHHDoEG6jk8SrcTkLKHGKF4Pyr0biI'
    });
    map_manager.map = map;
    
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), 
                                                 { icon: 'https://github.com/chenditc/mypokemon.io/raw/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png'});
        map.entities.push(pushpin); 
    }
}
