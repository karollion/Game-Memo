"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const config_1 = require("../../../config");
const react_redux_1 = require("react-redux");
const userRedux_1 = require("../../../redux/userRedux");
const Logout = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const options = {
            method: 'DELETE',
        };
        fetch(`${config_1.API_URL}/auth/logout`, options)
            .then(res => {
            dispatch((0, userRedux_1.logOut)());
            navigate('/');
        });
    }, [dispatch]);
    return null;
};
exports.default = Logout;
//# sourceMappingURL=Logout.js.map