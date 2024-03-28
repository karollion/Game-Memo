"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOUNDS_URL = exports.IMGS_URL = exports.API_URL = void 0;
exports.API_URL = process.env.NODE_ENV === 'production'
    ? '/api'
    : 'http://localhost:3030/api';
exports.IMGS_URL = (process.env.NODE_ENV === 'production')
    ? '/public/images/'
    : 'http://localhost:3030/public/images/';
exports.SOUNDS_URL = (process.env.NODE_ENV === 'production')
    ? '/public/sounds/'
    : 'http://localhost:3030/public/sounds/';
//# sourceMappingURL=config.js.map