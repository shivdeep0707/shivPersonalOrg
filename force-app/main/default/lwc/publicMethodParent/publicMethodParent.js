import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {

    @track inputValue;
    checkboxSelectHandler(){
        const childCmp = this.template.querySelector('c-public-method-child');
        console.log('this.inputValue-->>> ' + this.inputValue)
        childCmp.selectCheckbox(this.inputValue);



    }
    inputValueHandler(event){
        this.inputValue = event.target.value;

    }

}