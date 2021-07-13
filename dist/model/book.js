"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = "mongodb://127.0.0.1:27017/test";
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
const Book = mongoose_1.default.model("Book", exports.BookSchema);
exports.default = Book;
