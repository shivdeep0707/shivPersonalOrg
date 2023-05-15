({
    init : function(component, event, helper) {
		    // Calling Helper
        helper.checkSubscribeCall(component, event,helper);
	},
    
    cancelSubscribe : function (component, event, helper){
        window.clearInterval(component.get('v.pollId'));
    }
})