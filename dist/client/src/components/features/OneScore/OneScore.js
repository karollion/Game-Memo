"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const OneScore_module_scss_1 = require("./OneScore.module.scss");
const OneScore = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: OneScore_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: "data.user.avatar", alt: "avatar", className: OneScore_module_scss_1.default.img }), data.user && data.user.name] }), (0, jsx_runtime_1.jsx)("div", { children: data.cards }), (0, jsx_runtime_1.jsx)("div", { children: String(data.winAt) }), (0, jsx_runtime_1.jsx)("div", { children: data.moves }), (0, jsx_runtime_1.jsx)("div", { children: data.time }), (0, jsx_runtime_1.jsx)("div", { children: data.points })] }));
};
exports.default = OneScore;
//# sourceMappingURL=OneScore.js.map