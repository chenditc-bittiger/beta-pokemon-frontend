var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire" : 1480829864,
        "longitude" : -73.45,
        "latitude" : 40.75
    },
    {
        "pokemon_id" : 2,
        "expire" : 1480829864,
        "longitude" : -73.46,
        "latitude" : 40.75
    }
]

function get_count_down_from_timestamp(expire) {
    var now_time = new Date().getTime() / 1000;
    var time_left = expire - now_time;
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AjZmbGB9OLnThq1IWaOe8EqA1ivi2lExihwHHDoEG6jk8SrcTkLKHGKF4Pyr0biI'
    });
    map_manager.map = map;
    refresh_pokemon();

}

function refresh_pokemon() {
     // 1. Prepare pushpins
     var layer = new Microsoft.Maps.Layer();
     var pushpins = [];
     for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var icon_url = 'https://github.com/chenditc/mypokemon.io/raw/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png';
        var count_down = get_count_down_from_timestamp(map_item["expire"]);
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 { title: count_down,
                                                   icon: icon_url});
        pushpins.push(pushpin);
    }
    layer.add(pushpins);

    // 2. Remove old pushpins
    map_manager.map.layers.clear();
    
    // 3. Add new pushpins
    map_manager.map.layers.insert(layer);
}


