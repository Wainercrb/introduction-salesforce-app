public with sharing class DeviceController {
    @AuraEnabled(cacheable=true)
    public static Device__c getSingleDevice(){
        return [SELECT Name, Model__c FROM Device__c LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static list<Device__c> getDevices(){
        list<Device__c> lstDevices = [SELECT Name, Model__c FROM Device__c LIMIT 10];
        return lstDevices;
    }


    public static Device__c createDevice(String name, String model){
        Device__c device = new Device__c();
        device.Name = name;
        device.Model__c = model;
        insert device;

        return device;
    }
}
