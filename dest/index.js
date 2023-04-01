"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list = document.querySelector('#list');
const form = document.getElementById('#new-task-form');
const input = document.getElementById('#new-task-title');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
    if ((input === null || input === void 0 ? void 0 : input.value) === '' || (input === null || input === void 0 ? void 0 : input.value) === null)
        return;
    input.value;
});
