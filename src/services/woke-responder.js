"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WokeResponder = void 0;
const woke_message_1 = require("./woke-message");
const inversify_1 = require("inversify");
const types_1 = require("../types");
const Wokes = ["If practice makes perfect and nobody's perfect, why pratices ?",
    "Since you already born, you're birthday isn't actually you're second ?",
    "If i punched myself and i'm hurt, am i strong or weak ?",
    "If two mindreader read each other's mind, who's mind they are reading ?",
    "When butterflies are in love, do they have human in the stomach ?",
    "Do you ever wonder how your dog call you ?",
    "If a ginger work at a bakery, does this make him a gingerbread man ?",
    "If you're fingers have fingertips but you're toe don't have toetips, why you can tiptoe but can't fingertip ?",
    "Who put the alphabet in alphabetical order ?",
    "When the first watch was created, how did they know what it was ?",
    "If i work as a security guard at a samsung store, does that make me the guardian of the galaxy",
    "If two vegans are arguing, can it still considered as a beef ?",
    "Do You think sand is call sand because it's between sea and land ?",
    "If money is the root of all the evil, why are they asking money at church ?",
    "When you buy a bigger bed for you're bedroom, do you have more bed room or less bedroom ?",
    "If we can't see air, do you think fishs can see water ?",
    "When pornstars takes off their clothes, are they dressing up for work ?",
    "If nothing is impossible, is it possible to do something impossible ?",
    "Why we call bacon, bacon and cookie, cookie if we cook bacon and bake cookie ?",
    "If you were born deaf, in which language are you thinking ?"
];
function wokeFact() {
    let woke = Wokes[Math.floor(Math.random() * Wokes.length)];
    return woke;
}
let WokeResponder = class WokeResponder {
    constructor(WokeMessage) {
        this.WokeMessage = WokeMessage;
    }
    handle(message) {
        if (this.WokeMessage.isWoke(message.content)) {
            let woke = wokeFact();
            return message.reply('*Hit the blunt* ' + "\n\n" + woke);
        }
        return Promise.reject();
    }
};
WokeResponder = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.WokeMessage)),
    __metadata("design:paramtypes", [woke_message_1.WokeMessage])
], WokeResponder);
exports.WokeResponder = WokeResponder;
//# sourceMappingURL=woke-responder.js.map