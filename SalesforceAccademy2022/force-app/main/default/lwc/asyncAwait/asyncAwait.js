import { LightningElement } from 'lwc';
import getAllAccount from '@salesforce/apex/AccountSelector.getAll';

export default class AsyncAwait extends LightningElement {

    async connectedCallback(){
        try {
            let result = await getAllAccount();
            console.log(result);
        } catch (error) {
            console.error(error);un 
        }
    }

    /*connectedCallback(){
        getAllAccount()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }*/
}