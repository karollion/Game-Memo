"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Game_module_scss_1 = require("./Game.module.scss");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const gameRedux_1 = require("../../../redux/gameRedux");
const Board_1 = require("../../features/Board/Board");
const Container_1 = require("../../common/Container/Container");
const Victory_1 = require("../../features/Victory/Victory");
const StopWatch_1 = require("../../features/StopWatch/StopWatch");
const react_redux_1 = require("react-redux");
const scoreRedux_1 = require("../../../redux/scoreRedux");
const react_redux_2 = require("react-redux");
const userRedux_1 = require("../../../redux/userRedux");
const Game = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const user = (0, react_redux_2.useSelector)(userRedux_1.selectUser);
    const [finish, setFinish] = (0, react_1.useState)(false);
    const [time, setTime] = (0, react_1.useState)(0);
    const [timer, setTimer] = (0, react_1.useState)(null);
    const moves = (0, react_redux_2.useSelector)(gameRedux_1.selectNumberOfClicks);
    const finishGame = (cards) => {
        setFinish(true);
        stopStopWatch();
        if (user) {
            const scoreData = {
                points: 100,
                cards: cards,
                moves: moves,
                time: time,
                userId: user.id,
            };
            dispatch((0, scoreRedux_1.addScoreOnServer)(scoreData));
        }
    };
    const quitGame = () => {
        dispatch((0, gameRedux_1.resNumberOfClicks)());
        resetStopWatch();
        navigate("/");
    };
    const startStopWatch = () => {
        if (timer == null) {
            setTimer(setInterval(() => {
                setTime(time => time + 10);
            }, 10));
        }
    };
    const stopStopWatch = () => {
        clearInterval(timer);
        setTimer(null);
    };
    const resetStopWatch = () => {
        setTime(0);
    };
    (0, react_1.useEffect)(() => {
        return () => {
            if (timer)
                clearInterval(timer);
        };
    }, [timer]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: Game_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)(StopWatch_1.default, { time: time }), (0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsx)(Board_1.default, { finishGame: finishGame, startStopWatch: startStopWatch }) }), finish && (0, jsx_runtime_1.jsx)(Victory_1.default, { action: quitGame, time: time, moves: moves })] }));
};
exports.default = Game;
//# sourceMappingURL=Game.js.map