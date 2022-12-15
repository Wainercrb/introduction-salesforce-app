import ACCOUNT_OBJECT from '@salesforce/schema/Device__c';
import NAME_FIELD from '@salesforce/schema/Device__c.Name';
import MODEL_FIELD from '@salesforce/schema/Device__c.Model__c';
import { LightningElement, wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class DeviceFormComponent extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD, MODEL_FIELD];

    successHandler(event) {
        const toasEvent = new ShowToastEvent({
            title: 'Account Created',
            message: `Record ID: ${event.detail.id}`,
            variant: 'success'
        });
        this.dispatchEvent(toasEvent);
        fireEvent(this.pageRef, 'update-device-evt', {})
    }
}