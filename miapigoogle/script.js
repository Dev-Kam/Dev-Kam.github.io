function initMap(){
    var coord = {lat:-30.615709,lng: -57.985796};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 8,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}