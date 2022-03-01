import { LightningElement } from 'lwc';

export default class Example002Parent extends LightningElement {

    handleClick(){
        console.log(this.template.querySelector('.secretmessage'));
        this.template.querySelector('.secretmessage').displaySecretMessage();
    }
}