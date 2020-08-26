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
require("../../resources/globalstyles/bodystyle.css");
require("../../resources/globalstyles/login&createStyles.css");
var react_router_dom_1 = require("react-router-dom");
function Create() {
    var _a = react_1.useState({
        emailInput: "",
        passwordInput: ""
    }), inputs = _a[0], setInputs = _a[1];
    function handleEmail(e) {
        setInputs(__assign(__assign({}, inputs), { emailInput: e }));
    }
    function handlePassword(e) {
        setInputs(__assign(__assign({}, inputs), { passwordInput: e }));
    }
    function emailValidate() {
        var Em = inputs.emailInput.toLowerCase();
        if (Em.endsWith(".com") || Em.endsWith(".dk") || Em.endsWith(".co.uk") || Em.endsWith(".net")) {
            if (Em.includes("@")) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    function passwordValidate() {
        return true;
    }
    var _b = react_1.useState({
        id: 0,
        email: "",
        password: ""
    }), jsonResult = _b[0], setJsonResult = _b[1];
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Email: inputs.emailInput,
            Password: inputs.passwordInput
        })
    };
    function onResponse(rep) {
        setpostresult(rep);
        if (rep != "User allready exists") {
            alert("User created");
            window.history.go(-1);
        }
        else {
            alert("user allready exist");
        }
    }
    var _c = react_1.useState(""), postresult = _c[0], setpostresult = _c[1];
    function createUser() {
        if (emailValidate()) {
            if (passwordValidate()) {
                console.log(requestOptions.body);
                fetch("https://localhost:44398/api/users/addnewuser", requestOptions)
                    .then(function (x) { return x.text(); }).then(function (y) { return onResponse(y); }); // CommandAPI
            }
        }
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "centered" },
            react_1["default"].createElement("div", { className: "Box" },
                react_1["default"].createElement("div", { className: "title", style: { marginBottom: 25 } },
                    react_1["default"].createElement("h1", null, "Create Account")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("input", { placeholder: "Email", value: inputs.emailInput, onChange: function (e) { return handleEmail(e.target.value); } }),
                    react_1["default"].createElement("input", { placeholder: "Password", type: "password", value: inputs.passwordInput, onChange: function (e) { return handlePassword(e.target.value); }, id: "input2" }),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Cancel"),
                    react_1["default"].createElement("button", { onClick: function () { return createUser(); } }, "Create User")))),
        react_1["default"].createElement("br", null)));
}
exports["default"] = Create;
