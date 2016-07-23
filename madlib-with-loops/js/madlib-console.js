window.addEventListener('load', function() {
    var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var ideas = ['Kittens', 'Cars', 'Clowns', 'Insurance', 'Clothes', 'Food', 'Hipsters'];

    var createBtn = document.getElementById('create');

    createBtn.onclick = function() {
        var random1 = Math.floor((Math.random() * startups.length)),
            random2 = Math.floor((Math.random() * ideas.length));
        var generater = 'A startup that is ' + startups[random1] + ' but for ' + ideas[random2];
        document.getElementById("xForY").textContent = generater;
    };
});
