// YOUR SCRIPTS GO HERE
// http://simpleweatherjs.com/

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js


$.simpleWeather({
    location: 'cheney',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney i').addClass('icon-' + weather.code);
      
      // Get Condition Code
      console.log(weather.code);
      if ( weather.code >= 30 && weather.code <= 36 ) {
          $('body').addClass('sunny');
      }
       
      if ( weather.code >= 23 && weather.code <= 29 ) {
         $('body').addClass('cloudy');   
      }
        
      if ( weather.code >= 5 && weather.code <= 18 ) {
         $('body').addClass('rainy');   
      }
        
      if ( weather.code >= 0 && weather.code <= 4 ) {
         $('body').addClass('storm');   
      }
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

$.simpleWeather({
    location: 'ellensburg',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#ellensburg .temp').text(weather.temp);
      $('#ellensburg .city').text(weather.city);
      $('#ellensburg i').addClass('icon-' + weather.code);
      
      // Get Condition Code
      console.log(weather.code);
      if ( weather.code >= 30 && weather.code <= 36 ) {
          $('body').addClass('sunny');
      }
       
      if ( weather.code >= 23 && weather.code <= 29 ) {
         $('body').addClass('cloudy');   
      }
        
      if ( weather.code >= 5 && weather.code <= 18 ) {
         $('body').addClass('rainy');   
      }
        
      if ( weather.code >= 0 && weather.code <= 4 ) {
         $('body').addClass('storm');   
      }
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};

//SIDE BAR
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
});