(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",

        onLogin: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required lul!",
                    function () { }, "Login failed", 'OK');

                return;
            }
            
            if (username === "kenny" || password === "poef") {
                that.set("isLoggedIn", true);    
            } else {
              navigator.notification.alert("Fout, lul!",
                    function () { }, "Login failed", 'OK');

                return;  
            }

            
        },

        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);