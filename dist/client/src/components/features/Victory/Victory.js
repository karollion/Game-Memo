"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const convertMsToTime_1 = require("../../../utils/convertMsToTime");
const Victory_module_scss_1 = require("./Victory.module.scss");
const Victory = ({ action, time, moves }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: Victory_module_scss_1.default.root, children: ["Victory", (0, jsx_runtime_1.jsxs)("p", { children: ["Your time: ", (0, convertMsToTime_1.default)(time)] }), (0, jsx_runtime_1.jsxs)("p", { children: ["You made ", moves, " moves"] }), (0, jsx_runtime_1.jsx)("button", { type: 'button', onClick: action, children: "Back to Menu" })] }));
};
exports.default = Victory;
//# sourceMappingURL=Victory.js.map