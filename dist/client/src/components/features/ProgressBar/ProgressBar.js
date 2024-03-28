"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ProgressBar_module_scss_1 = require("./ProgressBar.module.scss");
const ProgressBar = ({ quantityCards, guessedCards }) => {
    const progress = Math.floor((guessedCards * 100) / quantityCards);
    return ((0, jsx_runtime_1.jsx)("div", { className: ProgressBar_module_scss_1.default.root, children: (0, jsx_runtime_1.jsx)("div", { className: ProgressBar_module_scss_1.default.bar, style: { width: progress + `%` } }) }));
};
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map