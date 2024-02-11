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
import type { DiagnosticInfo } from './DiagnosticInfo';
import {
    DiagnosticInfoFromJSON,
    DiagnosticInfoFromJSONTyped,
    DiagnosticInfoToJSON,
} from './DiagnosticInfo';
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './ResponseHeader';

/**
 * 
 * @export
 * @interface WriteResponse
 */
export interface WriteResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof WriteResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<number>}
     * @memberof WriteResponse
     */
    Results?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof WriteResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the WriteResponse interface.
 */
export function instanceOfWriteResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WriteResponseFromJSON(json: any): WriteResponse {
    return WriteResponseFromJSONTyped(json, false);
}

export function WriteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': !exists(json, 'Results') ? undefined : json['Results'],
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function WriteResponseToJSON(value?: WriteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
        'Results': value.Results,
        'DiagnosticInfos': value.DiagnosticInfos === undefined ? undefined : ((value.DiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

