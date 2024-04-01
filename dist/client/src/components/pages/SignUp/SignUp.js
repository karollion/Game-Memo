"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SignUp_module_scss_1 = require("./SignUp.module.scss");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const config_1 = require("../../../config");
const SignUp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [status, setStatus] = (0, react_1.useState)(null);
    const [signUpData, setSignUpData] = (0, react_1.useState)({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            body: JSON.stringify(signUpData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        setStatus('loading');
        fetch(`${config_1.API_URL}/auth/register`, options)
            .then(res => {
            if (res.status === 201) {
                setStatus('success');
                setSignUpData({ name: '', email: '', password: '', passwordRepeat: '' });
                setTimeout(() => {
                    navigate('/');
                }, 5000);
            }
            else if (res.status === 409) {
                setStatus('emailError');
            }
            else {
                setStatus('serverError');
            }
        })
            .catch(err => {
            setStatus('error');
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: SignUp_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)("h2", { className: SignUp_module_scss_1.default.title, children: "SignUp" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { onSubmit: handleSubmit, className: 'col-12 col-sm-3 mx-auto my-4 px-3 min-vh-100', children: [status === 'success' && ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Alert, { variant: 'success', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert.Heading, { children: "Succes!" }), (0, jsx_runtime_1.jsx)("p", { children: "You have been successfully registered! You can now log in." })] })), status === 'emailError' && ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert, { variant: "danger", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert.Heading, { children: "User with such email already exists" }) })), status === 'error' && ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Alert, { variant: "danger", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Alert.Heading, { children: "Something went wrong..." }), (0, jsx_runtime_1.jsx)("p", { children: "Make sure all the fields are filled correctly and try again!" })] })), status === 'loading' && ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Spinner, { animation: 'border', role: 'status', className: 'block mx-auto', children: (0, jsx_runtime_1.jsx)("span", { className: 'visually-hidden', children: "Loading..." }) })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: 'mb-3', controlId: 'formName', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Name" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: 'text', value: signUpData.name, placeholder: 'Player name', onChange: (e) => setSignUpData(Object.assign(Object.assign({}, signUpData), { name: e.target.value })) })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: 'mb-3', controlId: 'formEmail', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "E-mail" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: 'email', value: signUpData.email, placeholder: 'example@email.com', onChange: (e) => setSignUpData(Object.assign(Object.assign({}, signUpData), { email: e.target.value })) })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: 'mb-3', controlId: 'password', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Password" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: 'password', required: true, value: signUpData.password, placeholder: '******', onChange: (e) => setSignUpData(Object.assign(Object.assign({}, signUpData), { password: e.target.value })) })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: 'mb-3', controlId: 'confirmPassword', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Confirm password" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: 'password', required: true, value: signUpData.passwordRepeat, placeholder: '******', onChange: (e) => setSignUpData(Object.assign(Object.assign({}, signUpData), { passwordRepeat: e.target.value })) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'my-4 d-flex justify-content-center', children: (0, jsx_runtime_1.jsx)("button", { type: 'submit', children: "Sign up" }) })] })] }));
};
exports.default = SignUp;
//# sourceMappingURL=SignUp.js.map