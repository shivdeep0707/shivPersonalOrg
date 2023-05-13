import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayDiv = false;
    @track cityList = ['Jaipur', 'bangalore', 'Noida', 'Lucknow'];
    showDivHandler(event){
        this.displayDiv = event.target.checked;

    }
}