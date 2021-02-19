import { Invoice } from './classes/Invoice.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
let invoices = [];
let invoiceOne = new Invoice("mario", "star", 4000);
let invoiceTwo = new Invoice("yoshi", "egg", 500);
invoices.push(invoiceOne, invoiceTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
