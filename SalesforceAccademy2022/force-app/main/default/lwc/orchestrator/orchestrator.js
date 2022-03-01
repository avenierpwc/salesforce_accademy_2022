import { LightningElement, track } from 'lwc';

export default class Orchestrator extends LightningElement {

    @track show1 = true;
    @track show2 = false;
    @track show3 = false;

    handleNext(){

        if(this.show1){
            this.show1 = false;
            this.show2 = true;
            this.show3 = false;
        } else if(this.show2){
            this.show1 = false;
            this.show2 = false;
            this.show3 = true;
        } 
    }

    handleBack(){

        if(this.show2){
            this.show1 = true;
            this.show2 = false;
            this.show3 = false;
        } else if(this.show3){
            this.show1 = false;
            this.show2 = true;
            this.show3 = false;
        } 
    }

}