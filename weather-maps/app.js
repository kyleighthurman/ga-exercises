var xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function(){
//   if(this.readyState === XMLHttpRequest.DONE){
//     if(this.status === 200) {
//       var data = JSON.parse(this.responseText)
//       debugger;
//     }else {
//         console.log(this.status, 'something bad happened');
//       }
//     }
// };
// xhr.open('Get', 'https://api.github.com/users/kyleighthurman');
// xhr.send();

window.addEventListener('load', function() {
    var addBtn = document.getElementById('GET');

    addBtn.onclick = function() {
        //  console.log('i was clicked');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = status;
        xhr.open('Get', 'http://api.openweathermap.org/data/2.5/weather?q=austin,uk&appid=c197ca0419cddbf598595b4a86b68e7f');
        xhr.send();
    };

    function status() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText)
                console.log(data);
                console.log(data.main.temp);
                console.log(tempConvert(data.main.temp));
            } else {
                console.log(this.status, 'something bad happened');
            }
        }
    };

});

var tempConvert = function(kelvin) {
    return 1.8 * (kelvin - 273) + 32;
};
