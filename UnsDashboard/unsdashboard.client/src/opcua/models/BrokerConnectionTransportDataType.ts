/* tslint:disable */
/* eslint-disable */
/**
 * OPC UA REST API
 * This API provides simple REST based access to an OPC UA server.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: office@opcfoundation.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BrokerConnectionTransportDataType
 */
export interface BrokerConnectionTransportDataType {
    /**
     * 
     * @type {string}
     * @memberof BrokerConnectionTransportDataType
     */
    ResourceUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerConnectionTransportDataType
     */
    AuthenticationProfileUri?: string;
}

/**
 * Check if a given object implements the BrokerConnectionTransportDataType interface.
 */
export function instanceOfBrokerConnectionTransportDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrokerConnectionTransportDataTypeFromJSON(json: any): BrokerConnectionTransportDataType {
    return BrokerConnectionTransportDataTypeFromJSONTyped(json, false);
}

export function BrokerConnectionTransportDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrokerConnectionTransportDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResourceUri': !exists(json, 'ResourceUri') ? undefined : json['ResourceUri'],
        'AuthenticationProfileUri': !exists(json, 'AuthenticationProfileUri') ? undefined : json['AuthenticationProfileUri'],
    };
}

export function BrokerConnectionTransportDataTypeToJSON(value?: BrokerConnectionTransportDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResourceUri': value.ResourceUri,
        'AuthenticationProfileUri': value.AuthenticationProfileUri,
    };
}

