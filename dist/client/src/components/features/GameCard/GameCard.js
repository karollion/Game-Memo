"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const GameCard_module_scss_1 = require("./GameCard.module.scss");
const react_card_flip_1 = require("react-card-flip");
const config_1 = require("../../../config");
const use_sound_1 = require("use-sound");
const react_redux_1 = require("react-redux");
const gameRedux_1 = require("../../../redux/gameRedux");
const GameCard = ({ card, action, startStopWatch, children }) => {
    const [play] = (0, use_sound_1.default)(config_1.SOUNDS_URL + 'turn.mp3');
    const soundsToggler = (0, react_redux_1.useSelector)(gameRedux_1.selectGameSoundsToggle);
    const handleClick = () => {
        action(card);
        if (soundsToggler)
            play();
        startStopWatch();
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: GameCard_module_scss_1.default.root, children: (0, jsx_runtime_1.jsxs)(react_card_flip_1.default, { isFlipped: card.isFlipped, flipDirection: "vertical", children: [(0, jsx_runtime_1.jsx)("div", { className: GameCard_module_scss_1.default.front, children: (0, jsx_runtime_1.jsx)("img", { className: GameCard_module_scss_1.default.image, alt: card.name, src: 'images/cards/' + card.image + ".png" }) }), (0, jsx_runtime_1.jsx)("div", { className: GameCard_module_scss_1.default.back, onClick: handleClick, children: (0, jsx_runtime_1.jsx)("img", { className: GameCard_module_scss_1.default.image, alt: 'card back', src: "images/cards/back.jpg" }) })] }) }));
};
exports.default = GameCard;
//# sourceMappingURL=GameCard.js.map