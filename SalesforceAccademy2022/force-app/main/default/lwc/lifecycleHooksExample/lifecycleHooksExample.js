import { LightningElement } from 'lwc';

export default class LifecycleHooksExample extends LightningElement {

    constructor(){
        super();
        console.log('we are in the constructor');

        // illegal to add an attribute to the host element in the constructor
        // this.classList.add('new-class');
    }

    connectedCallback(){

        console.log('we are in the connected callback');
        // legal
        this.classList.add('new-class');

    }
}