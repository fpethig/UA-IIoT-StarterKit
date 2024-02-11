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
import type { HistoryReadResponse } from './HistoryReadResponse';
import {
    HistoryReadResponseFromJSON,
    HistoryReadResponseFromJSONTyped,
    HistoryReadResponseToJSON,
} from './HistoryReadResponse';

/**
 * 
 * @export
 * @interface HistoryReadResponseMessage
 */
export interface HistoryReadResponseMessage {
    /**
     * 
     * @type {Array<string>}
     * @memberof HistoryReadResponseMessage
     */
    NamespaceUris?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof HistoryReadResponseMessage
     */
    ServerUris?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof HistoryReadResponseMessage
     */
    ServiceId?: number;
    /**
     * 
     * @type {HistoryReadResponse}
     * @memberof HistoryReadResponseMessage
     */
    Body?: HistoryReadResponse;
}

/**
 * Check if a given object implements the HistoryReadResponseMessage interface.
 */
export function instanceOfHistoryReadResponseMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistoryReadResponseMessageFromJSON(json: any): HistoryReadResponseMessage {
    return HistoryReadResponseMessageFromJSONTyped(json, false);
}

export function HistoryReadResponseMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryReadResponseMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NamespaceUris': !exists(json, 'NamespaceUris') ? undefined : json['NamespaceUris'],
        'ServerUris': !exists(json, 'ServerUris') ? undefined : json['ServerUris'],
        'ServiceId': !exists(json, 'ServiceId') ? undefined : json['ServiceId'],
        'Body': !exists(json, 'Body') ? undefined : HistoryReadResponseFromJSON(json['Body']),
    };
}

export function HistoryReadResponseMessageToJSON(value?: HistoryReadResponseMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NamespaceUris': value.NamespaceUris,
        'ServerUris': value.ServerUris,
        'ServiceId': value.ServiceId,
        'Body': HistoryReadResponseToJSON(value.Body),
    };
}

