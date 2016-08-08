if(navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(pos) {
   console.log(pos);
   position = pos;
 });
} else {
 console.warn('browser doesnt support geolocation');
}

$(document).ready(function () {
  var $loginBtn = $('#login');
  var $signInView = $('.sign-in-view');
  var $imageResultsView = $('.image-results-view');
  var $div = $('.images');

  // initialize the SDK with our API key
 _500px.init({
   sdk_key: 'e2c5bf73927b9cb59e144a207fe2fa4acf5e4264'
 });

 _500px.getAuthorizationStatus(function (status) {
   if (status === 'authorized') {
     load()
   }
 });

 $loginBtn.on('click', function() {
   _500px.login(function (status) {
     if(status === 'authorized') {
       load();
     } else {
       console.log('not authorized');
     }
   });
 });

 function load() {

   $signInView.hide();
   $imageResultsView.show();

   if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       var radius = 50;
       var geo = position.coords.latitude +
                 ',' +
                 position.coords.longitude +
                 ',' +
                 radius +
                 'mi';

       console.log(geo);

       _500px.api('/photos/search', {geo: geo}, function(response) {
         console.log(response);
         for (var i = 0; i < response.data.photos.length; i++){
           var url = response.data.photos[i].image_url
           $('.images').append('<img src=' + url + '" />')
         }


       });
     });
   } else {
     console.warn('browser doesnt support geolocation');
   }
 }
});
