import { Invoice } from './classes/Invoice.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})

let invoices: Invoice[] = [];
let invoiceOne = new Invoice("mario", "star", 4000);
let invoiceTwo = new Invoice("yoshi", "egg", 500);

invoices.push(invoiceOne, invoiceTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})