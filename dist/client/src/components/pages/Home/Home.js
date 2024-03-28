"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Home_module_scss_1 = require("./Home.module.scss");
const react_1 = require("react");
const MenuButton_1 = require("../../common/MenuButton/MenuButton");
const Home = () => {
    const [user, setUser] = (0, react_1.useState)(null);
    const handleLogin = async () => {
        try {
            const response = await fetch('/api/auth');
            await console.log(response);
            const { url } = await response.json();
            window.location.href = url;
        }
        catch (error) {
            console.error('Error during login:', error);
        }
    };
    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout');
            setUser(null);
        }
        catch (error) {
            console.error('Error during logout:', error);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Home_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Home Page" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'game', children: "Start Game" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'scores', children: "Scores" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: 'instruction', children: "Instruction" }), (0, jsx_runtime_1.jsx)("a", { href: 'http://localhost:3000/api/auth', children: "login" }), (0, jsx_runtime_1.jsx)("a", { href: 'http://localhost:3000/api/auth/logout', children: "logout" }), user ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["User: ", user.name] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Email: ", user.email] })] })) : ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleLogout, children: "Logout" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleLogin, children: "Login with Google" })] }))] }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map