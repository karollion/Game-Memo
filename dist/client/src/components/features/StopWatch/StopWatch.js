"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StopWatch_module_scss_1 = require("./StopWatch.module.scss");
const convertMsToTime_1 = require("../../../utils/convertMsToTime");
const StopWatch = ({ time }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: StopWatch_module_scss_1.default.root, children: (0, jsx_runtime_1.jsx)("span", { className: StopWatch_module_scss_1.default.timer, children: (0, convertMsToTime_1.default)(time) }) }));
};
exports.default = StopWatch;
//# sourceMappingURL=StopWatch.js.map