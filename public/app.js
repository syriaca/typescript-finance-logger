"use strict";
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        console.log(this.client + " owes a " + this.details + " for " + this.amount + "\u20AC");
    };
    return Invoice;
}());
var invoices = [];
var invoiceOne = new Invoice("mario", "star", 4000);
var invoiceTwo = new Invoice("yoshi", "egg", 500);
invoices.push(invoiceOne, invoiceTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
