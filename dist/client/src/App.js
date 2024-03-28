"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Nav_1 = require("./components/views/Nav/Nav");
const Home_1 = require("./components/pages/Home/Home");
const Game_1 = require("./components/pages/Game/Game");
const Scores_1 = require("./components/pages/Scores/Scores");
const Instruction_1 = require("./components/pages/Instruction/Instruction");
const Footer_1 = require("./components/views/Footer/Footer");
function App() {
    const location = (0, react_router_dom_1.useLocation)();
    const [displayLocation, setDisplayLocation] = (0, react_1.useState)(location);
    const [transitionStage, setTransistionStage] = (0, react_1.useState)("fadeIn");
    (0, react_1.useEffect)(() => {
        if (location !== displayLocation)
            setTransistionStage("fadeOut");
    }, [location]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)(Nav_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: `${transitionStage}`, onAnimationEnd: () => {
                    if (transitionStage === "fadeOut") {
                        setTransistionStage("fadeIn");
                        setDisplayLocation(location);
                    }
                }, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { location: displayLocation, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/game", element: (0, jsx_runtime_1.jsx)(Game_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/scores", element: (0, jsx_runtime_1.jsx)(Scores_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/instruction", element: (0, jsx_runtime_1.jsx)(Instruction_1.default, {}) })] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map