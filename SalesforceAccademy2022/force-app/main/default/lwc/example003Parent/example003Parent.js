import { LightningElement, track } from 'lwc';

export default class Example003Parent extends LightningElement {

    @track message = 'Parent default value';

    handlechildmessage(event){
        this.message = event.detail;
    }
}