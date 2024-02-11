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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
} from './ExtensionObject';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
} from './RequestHeader';

/**
 * 
 * @export
 * @interface HistoryUpdateRequest
 */
export interface HistoryUpdateRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof HistoryUpdateRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<ExtensionObject>}
     * @memberof HistoryUpdateRequest
     */
    HistoryUpdateDetails?: Array<ExtensionObject>;
}

/**
 * Check if a given object implements the HistoryUpdateRequest interface.
 */
export function instanceOfHistoryUpdateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistoryUpdateRequestFromJSON(json: any): HistoryUpdateRequest {
    return HistoryUpdateRequestFromJSONTyped(json, false);
}

export function HistoryUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'HistoryUpdateDetails': !exists(json, 'HistoryUpdateDetails') ? undefined : ((json['HistoryUpdateDetails'] as Array<any>).map(ExtensionObjectFromJSON)),
    };
}

export function HistoryUpdateRequestToJSON(value?: HistoryUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'HistoryUpdateDetails': value.HistoryUpdateDetails === undefined ? undefined : ((value.HistoryUpdateDetails as Array<any>).map(ExtensionObjectToJSON)),
    };
}

