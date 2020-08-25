"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./maincomponet.css");
var showmoviescomponet_1 = require("../showmoviescomponet/showmoviescomponet");
function Maincomponet() {
    var logo = require('../../resources/Images/BPlayDKLogo.png');
    return (react_1["default"].createElement("div", { id: "pagewrapper" },
        react_1["default"].createElement("div", { id: "sidemenu" },
            react_1["default"].createElement("img", { alt: 'logo', src: String(logo) }),
            react_1["default"].createElement("h2", null, "Movies"),
            react_1["default"].createElement("h2", null, "Snacks"),
            react_1["default"].createElement("h2", null, "Reservation"),
            react_1["default"].createElement("h2", null, "Buy Snacks"),
            react_1["default"].createElement("h3", null, "About us")),
        react_1["default"].createElement("div", { id: "topbar" },
            react_1["default"].createElement("h6", { id: "alabel" }, "hej")),
        react_1["default"].createElement("div", { id: "view" },
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement("switch", null,
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: showmoviescomponet_1["default"] }))))));
}
exports["default"] = Maincomponet;
