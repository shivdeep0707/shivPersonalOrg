({
    checkSubscribeCall: function(component, event, helper){
        
       //execute callApexMethod() again after 5 sec each
        var pollId = window.setInterval(
            $A.getCallback(function() { 
                // Calling Apex Method
                helper.callApexMethod(component,helper,pollId);
            }), 5000
        );  
        
    },
                           
    handleResponse : function (response, component){
        var retVal = response.getReturnValue() ;
        // Your Logic
    },
        
    callApexMethod : function (component,helper,pollId){
        // Setting current pollId to stop the loop
       	component.set('v.pollId', pollId);
        // Setting Apex Method
        var action = component.get("c.getContactCount");
        // Setting Apex Param
        action.setParams({ Id : component.get("v.recordId") });
        // Call Back Action
        action.setCallback(this, function(response) {
            this.handleResponse(response, component);
        });
        $A.enqueueAction(action); 
    } 
})