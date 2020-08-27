"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./maincomponet.css");
var moviescomponet_1 = require("../moviescomponet/moviescomponet");
var reservationcomponets_1 = require("../reservationscomponets/reservationcomponets");
var buysnackscomponet_1 = require("../buysnackscomponet/buysnackscomponet");
var snackscomponet_1 = require("../snackscomponet/snackscomponet");
var aboutcomponet_1 = require("../aboutuscomponet/aboutcomponet");
function Maincomponet() {
    var array = ["showmovies", "showreservations", "showbuysnacks", "showsnacks", "showaboutus"];
    function toggle_visibility(id) {
        if (id == "showmovies") {
            var e = document.getElementById(id);
            console.log(e);
            e.style.visibility = 'visible';
            var e2 = document.getElementById("showreservations");
            console.log(e2);
            e2.style.visibility = 'collapse';
            var e3 = document.getElementById("showbuysnacks");
            console.log(e3);
            e3.style.visibility = 'collapse';
            var e4 = document.getElementById("showsnacks");
            console.log(e4);
            e4.style.visibility = 'collapse';
            var e5 = document.getElementById("showaboutus");
            console.log(e4);
            e5.style.visibility = 'collapse';
        }
        else if (id == "showreservations") {
            var e = document.getElementById(id);
            console.log(e);
            e.style.visibility = 'visible';
            var e2 = document.getElementById("showmovies");
            console.log(e2);
            e2.style.visibility = 'collapse';
            var e3 = document.getElementById("showbuysnacks");
            console.log(e3);
            e3.style.visibility = 'collapse';
            var e4 = document.getElementById("showsnacks");
            console.log(e4);
            e4.style.visibility = 'collapse';
            var e5 = document.getElementById("showaboutus");
            console.log(e4);
            e5.style.visibility = 'collapse';
        }
        else if (id == "showbuysnacks") {
            var e = document.getElementById(id);
            console.log(e);
            e.style.visibility = 'visible';
            var e2 = document.getElementById("showmovies");
            console.log(e2);
            e2.style.visibility = 'collapse';
            var e3 = document.getElementById("showsnacks");
            console.log(e3);
            e3.style.visibility = 'collapse';
            var e4 = document.getElementById("showreservations");
            console.log(e4);
            e4.style.visibility = 'collapse';
            var e5 = document.getElementById("showaboutus");
            console.log(e4);
            e5.style.visibility = 'collapse';
        }
        else if (id == "showsnacks") {
            var e = document.getElementById(id);
            console.log(e);
            e.style.visibility = 'visible';
            var e2 = document.getElementById("showmovies");
            console.log(e2);
            e2.style.visibility = 'collapse';
            var e3 = document.getElementById("showbuysnacks");
            console.log(e3);
            e3.style.visibility = 'collapse';
            var e4 = document.getElementById("showreservations");
            console.log(e4);
            e4.style.visibility = 'collapse';
            var e5 = document.getElementById("showaboutus");
            console.log(e4);
            e5.style.visibility = 'collapse';
        }
        else if (id == "showsnacks") {
            var e = document.getElementById(id);
            console.log(e);
            e.style.visibility = 'visible';
            var e2 = document.getElementById("showaboutus");
            console.log(e2);
            e2.style.visibility = 'collapse';
            var e3 = document.getElementById("showbuysnacks");
            console.log(e3);
            e3.style.visibility = 'collapse';
            var e4 = document.getElementById("showreservations");
            console.log(e4);
            e4.style.visibility = 'collapse';
            var e5 = document.getElementById("showsnacks");
            console.log(e4);
            e5.style.visibility = 'collapse';
        }
    }
    var logo = require('../../resources/Images/BPlayDKLogo.png');
    return (react_1["default"].createElement("div", { id: "pagewrapper" },
        react_1["default"].createElement("div", { id: "sidemenu" },
            react_1["default"].createElement("img", { alt: 'logo', src: String(logo) }),
            react_1["default"].createElement("h2", { onClick: function () { return toggle_visibility("showmovies"); } }, "Movies"),
            react_1["default"].createElement("h2", { onClick: function () { return toggle_visibility("showreservations"); } }, "My Reservations"),
            react_1["default"].createElement("h2", { onClick: function () { return toggle_visibility("showbuysnacks"); } }, "Buy Snacks"),
            react_1["default"].createElement("h2", { onClick: function () { return toggle_visibility("showsnacks"); } }, "My Snacks"),
            react_1["default"].createElement("h3", { onClick: function () { return toggle_visibility("showaboutus"); } }, "About us")),
        react_1["default"].createElement("div", { id: "topbar" },
            react_1["default"].createElement("h6", { id: "alabel" }, "hej")),
        react_1["default"].createElement("div", { id: "view" },
            react_1["default"].createElement("div", { id: "showmovies" },
                react_1["default"].createElement(moviescomponet_1["default"], null)),
            react_1["default"].createElement("div", { id: "showreservations" },
                react_1["default"].createElement(reservationcomponets_1["default"], null)),
            react_1["default"].createElement("div", { id: "showbuysnacks" },
                react_1["default"].createElement(buysnackscomponet_1["default"], null)),
            react_1["default"].createElement("div", { id: "showsnacks" },
                react_1["default"].createElement(snackscomponet_1["default"], null)),
            react_1["default"].createElement("div", { id: "showaboutus" },
                react_1["default"].createElement(aboutcomponet_1["default"], null)))));
}
exports["default"] = Maincomponet;
