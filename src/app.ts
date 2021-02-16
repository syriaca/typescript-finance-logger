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

class Invoice {

    name: string;
    details: string;
    amount: number;


    constructor(n: string, d: string, a: number) {
        this.name = n;
        this.details = d;
        this.amount = a;
    }

    format() {
        console.log(`${this.name} owes ${this.details} for ${this.amount}€`);
    }
}