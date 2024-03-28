"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Scores_module_scss_1 = require("./Scores.module.scss");
const react_1 = require("react");
const hooks_1 = require("../../../redux/hooks");
const MenuButton_1 = require("../../common/MenuButton/MenuButton");
const OneScore_1 = require("../../features/OneScore/OneScore");
const Container_1 = require("../../common/Container/Container");
const react_redux_1 = require("react-redux");
const scoreRedux_1 = require("../../../redux/scoreRedux");
const Scores = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const scores = (0, hooks_1.useAppSelector)((state) => state.AllScores.scores);
    const isLoading = (0, react_redux_1.useSelector)(scoreRedux_1.selectIsLoading);
    (0, react_1.useEffect)(() => {
        dispatch((0, scoreRedux_1.fetchScores)());
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsx)("div", { className: Scores_module_scss_1.default.root, children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Scores" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { nav: '', children: "Back" }), (0, jsx_runtime_1.jsxs)("div", { className: Scores_module_scss_1.default.topTable, children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Name" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Cards" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Date" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Moves" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Time" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Points" }) })] }), (0, jsx_runtime_1.jsx)("div", { children: isLoading ? ((0, jsx_runtime_1.jsx)("p", { children: "Loading..." })) : ((0, jsx_runtime_1.jsx)("div", { children: scores.map((score) => ((0, jsx_runtime_1.jsx)(OneScore_1.default, { data: score }, score.id))) })) })] }) }));
};
exports.default = Scores;
//# sourceMappingURL=Scores.js.map