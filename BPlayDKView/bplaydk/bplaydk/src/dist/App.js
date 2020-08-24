"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var create_1 = require("./componets/createusercomponet/create");
var login_1 = require("./componets/logincomponet/login");
var maincomponet_1 = require("./componets/mainview/maincomponet");
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
function App() {
    var apphistory = react_router_dom_2.useHistory();
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                react_1["default"].createElement(login_1["default"], null)),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/createUser" },
                react_1["default"].createElement(create_1["default"], null)),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/login" },
                react_1["default"].createElement(maincomponet_1["default"], null)))));
}
exports["default"] = App;
