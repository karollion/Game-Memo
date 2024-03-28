"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_module_scss_1 = require("./Button.module.scss");
const Button = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: Button_module_scss_1.default.root, children: (0, jsx_runtime_1.jsx)("div", { className: Button_module_scss_1.default.content, children: children }) }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map