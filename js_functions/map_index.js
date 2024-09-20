function initMap() {

  //Map options
  var options = {
      zoom:9,
      center:{lat: 34.0522,lng: -118.2437},
  }

  //New map
  var map = new google.maps.Map(document.getElementById("map"),options);


  /*
  //Way 1. Add Markers - add 1-by-1 (for debugging)
  addMarker({
    coords:{lat:34.1377, lng:-118.1253}, 
    info_str:'<h1>Station No</h1> <p>Name Str</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50011">Link</a></p>'
  });
  addMarker({
    coords:{lat:34, lng:-118.1253}
    //here no info string and the if check will not create an infowindow.
  }); 
  */


  //Way 2. Add Markers from array
  // Create array with inputs
  /* They are read from a .js file
 var markers = [
    {
      coords: {lat:34.1377, lng:-118.1253}, 
      info_str: '<h1>Station No</h1> <p>Name Str</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50011" target="_blank">Link</a></p>'
    },
    {
      coords: {lat:34, lng:-118.1253}
      //here no info string and the if check will not create an infowindow.
    }
  ]; */

  // Loop through the array
  for(var i=0; i<markers.length;i++){
    addMarker(markers[i]);
  };


  //Add Markers function
  function addMarker(props){

    var marker = new google.maps.Marker({
      position:props.coords,
      map:map
    });

    //Add info string in the marker, if it exists
    if(props.info_str){
    var infoWindow = new google.maps.InfoWindow({
      //content:'<h1>Station No</h1> <p>Name Str</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50011">Link</a></p>'
      content:props.info_str
    });
    };
  
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });


  };
}