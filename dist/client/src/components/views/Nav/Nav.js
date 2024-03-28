"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Nav_module_scss_1 = require("./Nav.module.scss");
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_sound_1 = require("react-sound");
const config_1 = require("../../../config");
const react_redux_1 = require("react-redux");
const gameRedux_1 = require("../../../redux/gameRedux");
const react_redux_2 = require("react-redux");
const Nav = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [toggleNav, setToggleNav] = (0, react_1.useState)(false);
    const [status, setStatus] = (0, react_1.useState)('STOPPED');
    const soundsToggler = (0, react_redux_2.useSelector)(gameRedux_1.selectGameSoundsToggle);
    const togglePlayStatus = () => {
        setStatus(status => status === 'STOPPED' ? 'PLAYING' : 'STOPPED');
    };
    const toggleGameSounds = () => {
        dispatch((0, gameRedux_1.toggleSounds)());
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Nav_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsxs)("nav", { className: Nav_module_scss_1.default.navigation, children: [(0, jsx_runtime_1.jsxs)("div", { className: `${Nav_module_scss_1.default.navicon1} ${toggleNav ? Nav_module_scss_1.default.open : ''}`, onClick: () => setToggleNav((prev) => !prev), children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {})] }), toggleNav ?
                        (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { onClick: () => setToggleNav((prev) => !prev), className: ({ isActive }) => isActive ? Nav_module_scss_1.default.linkActive : Nav_module_scss_1.default.link, to: "/", children: "Home" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { onClick: () => setToggleNav((prev) => !prev), className: ({ isActive }) => isActive ? Nav_module_scss_1.default.linkActive : Nav_module_scss_1.default.link, to: "/scores", children: "Scores" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { onClick: () => setToggleNav((prev) => !prev), className: ({ isActive }) => isActive ? Nav_module_scss_1.default.linkActive : Nav_module_scss_1.default.link, to: "/instruction", children: "Instruction" }), (0, jsx_runtime_1.jsxs)("div", { className: Nav_module_scss_1.default.music, children: [(0, jsx_runtime_1.jsx)("p", { className: Nav_module_scss_1.default.link, children: "Music:" }), (0, jsx_runtime_1.jsx)("button", { className: Nav_module_scss_1.default.btnMusic, onClick: togglePlayStatus, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: Nav_module_scss_1.default.icon, icon: status === 'PLAYING' ? free_solid_svg_icons_1.faVolumeHigh : free_solid_svg_icons_1.faVolumeXmark }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: Nav_module_scss_1.default.music, children: [(0, jsx_runtime_1.jsx)("p", { className: Nav_module_scss_1.default.link, children: "Sound:" }), (0, jsx_runtime_1.jsx)("button", { className: Nav_module_scss_1.default.btnMusic, onClick: toggleGameSounds, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: Nav_module_scss_1.default.icon, icon: soundsToggler ? free_solid_svg_icons_1.faVolumeHigh : free_solid_svg_icons_1.faVolumeXmark }) })] })] })
                        : null] }), (0, jsx_runtime_1.jsx)(react_sound_1.default, { url: config_1.SOUNDS_URL + 'simple-piano-melody-9834.mp3', playStatus: status, loop: true })] }));
};
exports.default = Nav;
//# sourceMappingURL=Nav.js.map