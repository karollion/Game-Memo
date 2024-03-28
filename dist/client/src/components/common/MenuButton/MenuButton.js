"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const MenuButton_module_scss_1 = require("./MenuButton.module.scss");
const MenuButton = ({ nav, children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        navigate("/" + nav);
    };
    return ((0, jsx_runtime_1.jsx)("button", { className: MenuButton_module_scss_1.default.button, onClick: handleClick, children: children }));
};
exports.default = MenuButton;
//# sourceMappingURL=MenuButton.js.map