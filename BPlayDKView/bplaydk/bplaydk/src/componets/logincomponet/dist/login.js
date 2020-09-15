"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
require("../../resources/globalstyles/bodystyle.css");
require("../../resources/globalstyles/login&createStyles.css");
var react_router_dom_2 = require("react-router-dom");
function Login() {
    // Define component state
    var _a = react_1.useState({
        emailInput: "",
        passwordInput: ""
    }), inputs = _a[0], setInputs = _a[1];
    var _b = react_1.useState({
        id: 0,
        email: "",
        username: "",
        password: ""
    }), jsonResult = _b[0], setJsonResult = _b[1];
    //#region Inputhandlers
    // Input handler which uses state
    function handleEmail(e) {
        setInputs(__assign(__assign({}, inputs), { emailInput: e }));
    }
    function handlePassword(e) {
        setInputs(__assign(__assign({}, inputs), { passwordInput: e }));
    }
    //#endregion
    var history = react_router_dom_2.useHistory();
    function tryLogin() {
        /*  axios({
            method: 'get', url: 'https://localhost:44398/api/ausers/doesuserexist', {data}
            }}).then(rep => {
            console.log(rep);
            if (rep.data == "Does Not Exist")
              alert("Incorrect email or password");
            else {
              history.push("/login");
            }
          })*/
        var passwordToSeach = inputs.passwordInput;
        var emailToSearch = inputs.emailInput;
        try {
            /* const res = axios.get("https://localhost:44398/api/ausers",
               {
                 data:
                 {
                   "Email": inputs.emailInput,
                   "Password": inputs.passwordInput
                 }
               }) */
            axios_1["default"].get("https://localhost:44398/api/ausers", {
                params: {
                    Email: inputs.emailInput,
                    Password: inputs.passwordInput
                }
            }).then(function (response) {
                if (response.data == "Exist") {
                    history.push({
                        pathname: '/login',
                        search: '?query=abc',
                        state: { detail: response.data }
                    });
                }
                else if (response.data == "Does Not Exist") {
                    alert("Try again with diffrent email or password");
                }
                else {
                    alert("Error with server");
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    var logo = require('../../resources/Images/BPlayDKLogo.png');
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "centered" },
            react_1["default"].createElement("div", { className: "Box" },
                react_1["default"].createElement("div", { className: "title", style: { marginBottom: 25 } },
                    react_1["default"].createElement("img", { alt: 'logo', src: String(logo), id: "imgstyle" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("input", { placeholder: "Email", value: inputs.emailInput, onChange: function (e) { return handleEmail(e.target.value); } }),
                    react_1["default"].createElement("input", { placeholder: "Password", type: "password", value: inputs.passwordInput, onChange: function (e) { return handlePassword(e.target.value); }, id: "input2" }),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/createUser" }, "Create Account"),
                    react_1["default"].createElement("button", { onClick: function () { return tryLogin(); } }, "Log In")))),
        react_1["default"].createElement("br", null)));
}
exports["default"] = Login;
