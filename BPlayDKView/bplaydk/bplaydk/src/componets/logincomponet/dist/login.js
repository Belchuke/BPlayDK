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
require("../../resources/globalstyles/bodystyle.css");
require("../../resources/globalstyles/login&createStyles.css");
function Login() {
    // Define component state
    var _a = react_1.useState({
        emailInput: "",
        passwordInput: ""
    }), inputs = _a[0], setInputs = _a[1];
    var _b = react_1.useState({
        id: 0,
        email: "",
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
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "centered" },
            react_1["default"].createElement("div", { className: "Box" },
                react_1["default"].createElement("div", { className: "title", style: { marginBottom: 25 } },
                    react_1["default"].createElement("h1", null, "BPlay")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("input", { placeholder: "Email", value: inputs.emailInput, onChange: function (e) { return handleEmail(e.target.value); } }),
                    react_1["default"].createElement("input", { placeholder: "Password", type: "password", value: inputs.passwordInput, onChange: function (e) { return handlePassword(e.target.value); }, id: "input2" }),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/createUser" }, "Create Account")))),
        react_1["default"].createElement("br", null)));
}
exports["default"] = Login;
