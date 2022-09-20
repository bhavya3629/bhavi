var attempt = 3;
function validate() {
    var user = document.getElementById("username").value;
    console.log(user);
    var pass = document.getElementById("password").value;
    if (user == null || user == "") {
        alert("name can't be blank");
    }
}