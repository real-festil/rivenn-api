"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let AppService = class AppService {
    async sendEmail(email, status) {
        const body = {
            personalizations: [{ to: [{ email: email }], subject: 'Rivenn' }],
            from: { email: 'rivennsendgrid@gmail.com' },
            content: [
                {
                    type: 'text/html',
                    value: status === 'approved'
                        ? '<div><img src="https://play-lh.googleusercontent.com/VIvVZzgEBzQl1RGTqu7cO2AfwvfsxAN7zqV9xdDG8T5iyofYMXCX7ybO8JWGpFroCFU=s180-rw" /><p>Your property was approved.</p><p>Now your property is visible for all Rivenn users.<br />Congratulations!</p></div>'
                        : '<div><img src="https://play-lh.googleusercontent.com/VIvVZzgEBzQl1RGTqu7cO2AfwvfsxAN7zqV9xdDG8T5iyofYMXCX7ybO8JWGpFroCFU=s180-rw" /><p>Your property was rejected for a policy violation.</p><p>Rivenn team will contact with you for further details.</p></div>',
                },
            ],
        };
        node_fetch_1.default('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer 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',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
            console.log('response', response);
        })
            .catch((err) => {
            console.log('err', err);
        });
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map