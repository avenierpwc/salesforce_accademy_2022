import { LightningElement } from 'lwc';

export default class Example003Child extends LightningElement {

    handleClick(){
        const myevent = new CustomEvent('sendmessagetofather', {
            detail: 'Something Something Something...Darkside'
        });
        this.dispatchEvent(myevent);
    }
}