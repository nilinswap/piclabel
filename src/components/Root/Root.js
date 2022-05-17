"use strict";
exports.__esModule = true;
var React = require("react");
var Game_1 = require("../Game");
var react_router_dom_1 = require("react-router-dom");
var Root_styles_1 = require("./Root.styles");
var Root = function (_a) {
    return (React.createElement(Root_styles_1.ScParent, { "data-testid": "Root", className: "root" },
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/game", component: function () { return React.createElement(Game_1["default"], null); } }),
            "Hello World")));
};
exports["default"] = Root;
