"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Home_module_scss_1 = require("./Home.module.scss");
const MenuButton_1 = require("../../common/MenuButton/MenuButton");
const Home = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: Home_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Home Page" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'game', children: "Start Game" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'scores', children: "Scores" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'instruction', children: "Instruction" })] }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map