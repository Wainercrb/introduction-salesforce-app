import { LightningElement, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import getDevices from '@salesforce/apex/DeviceController.getDevices';

export default class DeviceListComponent extends LightningElement {
    @wire(getDevices) device;
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('update-device-evt', this.handleCallback, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    
    handleCallback(args) {
        refreshApex(this.device);
    }
}