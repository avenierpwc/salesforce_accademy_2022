public with sharing class AccountSelector {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAll() {
        return [select Id from Account limit 200];
    }
}
