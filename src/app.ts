import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const list = document.querySelector(".item-list") as HTMLUListElement;
const listTemplate = new ListTemplate(list);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values)
    }

    listTemplate.render(doc, type.value, type.value === "payment" ? "start" : "end");
});