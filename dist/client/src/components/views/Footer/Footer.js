"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_module_scss_1 = require("./Footer.module.scss");
function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
}
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: Footer_module_scss_1.default.root, children: (0, jsx_runtime_1.jsxs)("p", { children: ["Copyright \u00A9 Memo Game ", getDate(), ".  Create by:", (0, jsx_runtime_1.jsx)("a", { href: 'https://karol-bernatowicz-portfolio.replit.app/', target: "_blank", title: "Karol Bernatowicz home page", rel: "noreferrer", children: "  Karol Bernatowicz" })] }) }));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map