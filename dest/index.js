"use strict";
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_confetti_1 = __importDefault(require("canvas-confetti"));
canvas_confetti_1.default.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
})({ particleCount: 200, spread: 200 });
