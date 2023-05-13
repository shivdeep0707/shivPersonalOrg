import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // dynamicGreeting = 'World';
    @track dynamicGreeting = 'World';

    dynamicGreetingHndle(event){
        this.dynamicGreeting = event.target.value;


    }

}