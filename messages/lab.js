
function parse() {
    var request = new XMLHttpRequest();

    request.open("get", "http://messagehub.herokuapp.com/messages.json", true);

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            console.log("Got the data back!");
            data = request.responseText;
            console.log(data);
            parsedObjects = JSON.parse(data);
            elem = document.getElementById("messages");
            for (count = 0; count < parsedObjects.length; count++) {
                console.log(Object.keys(parsedObjects[count]));
                elem.innerHTML += "<p>" + parsedObjects[count]["username"] + ": " + parsedObjects[count]["content"] + "</p>";
        }
    }
        else {
            console.log("In progress...");
        }
    };
    request.send(null);
}