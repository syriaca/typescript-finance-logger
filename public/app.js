"use strict";
// # 11 https://youtu.be/hcuKd-Q_tP8
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
// #12 Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var Product = /** @class */ (function () {
    function Product(n, d, p, a) {
        this.name = n;
        this.description = d;
        this.price = p;
        this.available = a;
    }
    Product.prototype.log = function () {
        return this.name;
    };
    return Product;
}());
var invoices = [];
invoices.push(new Invoice("yoshi", "google car", 6000000));
