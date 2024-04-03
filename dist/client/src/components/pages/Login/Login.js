"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Login_module_scss_1 = require("./Login.module.scss");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const config_1 = require("../../../config");
const react_redux_1 = require("react-redux");
const userRedux_1 = require("../../../redux/userRedux");
const Login = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [status, setStatus] = (0, react_1.useState)(null);
    const [loginData, setLoginData] = (0, react_1.useState)({
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        setStatus('loading');
        fetch(`${config_1.API_URL}/auth/login`, options)
            .then(res => {
            if (res.status === 201) {
                setStatus('success');
                return res.json();
            }
            else if (res.status === 400) {
                setStatus('clientError');
            }
            else {
                setStatus('serverError');
            }
        })
            .then(user => {
            dispatch((0, userRedux_1.logIn)({ user }));
            setTimeout(() => { navigate('/'); }, 500);
        })
            .catch(err => {
            setStatus('serverError');
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)("h2", { className: Login_module_scss_1.default.title, children: "SignUp" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { onSubmit: handleSubmit, className: 'col-12 col-sm-3 mx-auto my-4 px-3 min-vh-100', children: [status === 'success' && ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Alert, { variant: 'success', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert.Heading, { children: "Succes!" }), (0, jsx_runtime_1.jsx)("p", { children: "You have been successfully logined in!" })] })), status === 'serverError' && ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Alert, { variant: 'danger', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert.Heading, { children: "Something went wrong..." }), (0, jsx_runtime_1.jsx)("p", { children: "Unexpected error... Try again!" })] })), status === 'clientError' && ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Alert, { variant: 'danger', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert.Heading, { children: "Incorrect data" }), (0, jsx_runtime_1.jsx)("p", { children: "Login or password are incorrect..." })] })), status === 'loading' && ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Spinner, { animation: 'border', role: 'status', className: 'block mx-auto', children: (0, jsx_runtime_1.jsx)("span", { className: 'visually-hidden', children: "Loading..." }) })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: 'mb-3', controlId: 'formEmail', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "E-mail" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: 'email', value: loginData.email, placeholder: 'example@email.com', onChange: (e) => setLoginData(Object.assign(Object.assign({}, loginData), { email: e.target.value })) })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: 'mb-3', controlId: 'password', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Password" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: 'password', required: true, value: loginData.password, placeholder: '******', onChange: (e) => setLoginData(Object.assign(Object.assign({}, loginData), { password: e.target.value })) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'my-4 d-flex justify-content-center', children: (0, jsx_runtime_1.jsx)("button", { type: 'submit', children: "Login" }) })] })] }));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map