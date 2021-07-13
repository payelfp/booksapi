"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.updateBook = exports.deleteBook = exports.getBook = exports.allBooks = void 0;
const book_1 = __importDefault(require("../model/book"));
let allBooks = (req, res) => {
    book_1.default.find((err, books) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.allBooks = allBooks;
let getBook = (req, res) => {
    book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.getBook = getBook;
let deleteBook = (req, res) => {
    book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted Book");
        }
    });
};
exports.deleteBook = deleteBook;
let updateBook = (req, res) => {
    // console.log(req.body);
    book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book!");
        }
    });
};
exports.updateBook = updateBook;
let addBook = (req, res) => {
    let book = new book_1.default(req.body);
    book.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.addBook = addBook;
