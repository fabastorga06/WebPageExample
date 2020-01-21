var checkPassword = function() {

    var input = document.getElementById("in").value;
    var lenInput = input.length;
    var pattern = /[a-zA-Z0-9]/;

    if (input.match(pattern) && lenInput >= 8) {
        document.getElementById("out").innerHTML = "your password is correct";
    } else {
        document.getElementById("out").innerHTML = "Try again :(";
    }
}