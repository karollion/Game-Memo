"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Home_module_scss_1 = require("./Home.module.scss");
const react_redux_1 = require("react-redux");
const MenuButton_1 = require("../../common/MenuButton/MenuButton");
const userRedux_1 = require("../../../redux/userRedux");
const Home = () => {
    const user = (0, react_redux_1.useSelector)(userRedux_1.selectUser);
    return ((0, jsx_runtime_1.jsxs)("div", { className: Home_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'game', children: "New Game" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'scores', children: "Scores" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'instruction', children: "Instruction" }), !user ? (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'signup', children: "Sign up" }) : null, !user ? (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'login', children: "Login" }) : null, user ? (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'logout', children: "Logout" }) : null, user ? (0, jsx_runtime_1.jsxs)("p", { children: ["Welcome  ", user.name] }) : null] }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map