public class DemoClass{

    
    public static list<list<sObject>> searchterm(list<string> termList){
        
        list<list<sObject>> result = new list<list<sObject>>();
        for( string term : termList){
            result.addAll([find : term in all fields returning Account(Name), Contact(FirstName, LastName)]);
        }
        system.debug('result.size()-->> ' + result.size());
        return result;
}
}