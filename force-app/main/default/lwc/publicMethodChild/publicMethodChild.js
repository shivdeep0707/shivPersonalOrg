import { api, LightningElement, track } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = 'blue';
    options = [
        {label:'Red Marker' , value:'red' },
        {label:'Blue Marker' , value:'blue' },
        {label:'Green Marker' , value:'green' },
        {label:'Black Marker' , value:'black' }
    ];


  

    @api
    selectCheckbox(checkboxvalue){
        const selectedCheckbox = this.options.find( checkbox=>{
            return checkboxvalue === checkbox.value;
        }
        )
        console.log('selectedCheckbox-->> ' + selectedCheckbox);
        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return 'successfully checked';
        }

    }









}