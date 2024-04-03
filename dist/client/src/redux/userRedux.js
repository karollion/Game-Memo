"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUser = exports.isUserLoginedIn = exports.logOut = exports.logIn = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const config_1 = require("../config");
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role || (Role = {}));
const initialState = {
    user: null,
};
const userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload.user;
        },
        logOut: (state) => {
            state.user = null;
        },
    },
});
_a = userSlice.actions, exports.logIn = _a.logIn, exports.logOut = _a.logOut;
const isUserLoginedIn = () => async (dispatch) => {
    try {
        const response = await fetch(`${config_1.API_URL}/auth/users`);
        const data = await response.json();
        if (response.status === 200) {
            dispatch((0, exports.logIn)(data.user));
        }
        else {
            console.log('No user logged in');
        }
    }
    catch (error) {
        console.error('Error while checking user login status:', error);
    }
};
exports.isUserLoginedIn = isUserLoginedIn;
const selectUser = (state) => state.user.user;
exports.selectUser = selectUser;
exports.default = userSlice.reducer;
//# sourceMappingURL=userRedux.js.map