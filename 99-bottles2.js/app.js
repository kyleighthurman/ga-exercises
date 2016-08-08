// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics online.
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
$(document).ready(function() {
    for (var number = 99; number > -1; number--) {
        var item = $("<li></li>");
        var itemText = "";
        var beforeBottle = "";
        var afterBottle = "";
        var emptyWall = "";

        if (number >= 3) {
            beforeBottle = " bottles ";
            afterBottle = " bottles ";
        } else if (number === 2) {
            beforeBottle = " bottles ";
            afterBottle = " bottle ";
        } else {
            beforeBottle = " bottle ";
            afterBottle = " bottles ";
            emptyWall = "no more bottles ";
        }

        itemText = itemText + number.toString() + beforeBottle + "of beer on the wall, ";
        itemText = itemText + number.toString() + beforeBottle + "of beer. ";
        itemText = itemText + "<br>";
        itemText = itemText + "Take one down, pass it around, ";

        if (number >= 2) {
          itemText = itemText + (number - 1) + afterBottle + "of beer on the wall. "
        } else if (number === 1) {
          itemText = itemText + emptyWall + "of beer on the wall.";
        } else {
          itemText = "No more bottles of beer on the wall, no more bottles of beer. "
          itemText = itemText + "<br>";
          itemText = itemText + " Go to the store and buy some more, 99 bottles of beer on the wall.";
        }
        item[0].innerHTML = itemText;
        $("#wall").append(item).append("<br>");
    }
});
