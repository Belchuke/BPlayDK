"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./maincomponet.css");
var DynamicSwitch_1 = require("../helpercomponets/DynamicSwitch");
function Maincomponet() {
    var dynamicRoutes = [
        {
            name: "Movies",
            component: (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { id: "ViewID" }, "Movies")))
        },
        {
            name: "My Reservations",
            component: (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { id: "ViewID" }, "My Reservations"),
                react_1["default"].createElement("p", null, "So you can pass down new elements!")))
        },
        {
            name: "showbuysnacks",
            component: (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { id: "ViewID" }, "Buy Snacks"),
                react_1["default"].createElement("p", null, "So you can pass down new elements!")))
        },
        {
            name: "showsnacks",
            component: (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { id: "ViewID" }, "showsnacks"),
                react_1["default"].createElement("p", null, "So you can pass down new elements!")))
        },
        {
            name: "showaboutus",
            component: (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { id: "ViewID" }, "showaboutus"),
                react_1["default"].createElement("p", null, "So you can pass down new elements!")))
        },
    ];
    var _a = react_1.useState("Movies"), currentDynamic = _a[0], setCurrentDynamic = _a[1];
    var logo = require('../../resources/Images/BPlayDKLogo.png');
    return (react_1["default"].createElement("div", { id: "pagewrapper" },
        react_1["default"].createElement("div", { id: "sidemenu" },
            react_1["default"].createElement("img", { alt: 'logo', src: String(logo) }),
            react_1["default"].createElement("h2", { onClick: function () { return setCurrentDynamic("Movies"); } }, "Movies"),
            react_1["default"].createElement("h2", { onClick: function () { return setCurrentDynamic("My Reservations"); } }, "My Reservations"),
            react_1["default"].createElement("h2", { onClick: function () { return setCurrentDynamic("showbuysnacks"); } }, "Buy Snacks"),
            react_1["default"].createElement("h2", { onClick: function () { return setCurrentDynamic("showsnacks"); } }, "My Snacks"),
            react_1["default"].createElement("h3", { onClick: function () { return setCurrentDynamic("showaboutus"); } }, "About us")),
        react_1["default"].createElement("div", { id: "topbar" },
            react_1["default"].createElement("h6", { id: "alabel" }, "hej")),
        react_1["default"].createElement("div", { id: "view" },
            react_1["default"].createElement(DynamicSwitch_1["default"], { current: currentDynamic, routes: dynamicRoutes }))));
}
exports["default"] = Maincomponet;
