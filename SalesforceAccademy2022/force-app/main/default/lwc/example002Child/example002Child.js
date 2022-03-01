import { LightningElement, api, track } from 'lwc';

export default class Example002Child extends LightningElement {
    @api title;
    @track showSecretMessage = false;

    @api displaySecretMessage(){
        this.showSecretMessage = true;
        console.log('showSecretMessage',this.showSecretMessage);
    }
}