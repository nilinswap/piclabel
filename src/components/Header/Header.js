"use strict";
exports.__esModule = true;
var React = require("react");
var header_styles_1 = require("./header.styles");
var Header = function (_a) {
    return (React.createElement(header_styles_1.ScParent, null,
        React.createElement(header_styles_1.ScHeading, null,
            React.createElement(header_styles_1.ScWhiteLink, { to: "/" }, "react boilerplate")),
        React.createElement(header_styles_1.ScTopRightOptions, null, "Header")));
};
exports["default"] = Header;
