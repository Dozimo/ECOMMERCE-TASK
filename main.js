function change() {
    var btn = document.getElementById("LoginStatus");

                if (btn.value == "Login") {
                    btn.value = "Logout";
                    btn.innerHTML = "Logout";
                }
                else {
                    btn.value = "Login";
                    btn.innerHTML = "Login";
                }
}

