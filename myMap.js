var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'AjZmbGB9OLnThq1IWaOe8EqA1ivi2lExihwHHDoEG6jk8SrcTkLKHGKF4Pyr0biI'
});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/chenditc/mypokemon.io/raw/gh-pages/images/pushpin_images/pokemon/1.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
map.entities.push(pushpin);
