import { LightningElement, api, track } from 'lwc';

export default class ApiVsTrack extends LightningElement {

    @api apiVariable = 'API Variable value';
    @track trackVariable = 'TRACK Variable value';

    

    handleClick(){
        console.log('change all variable to the same value');
        this.apiVariable = 'New value';
        this.trackVariable = 'New value';

    }
}