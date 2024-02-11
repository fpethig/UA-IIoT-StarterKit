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

/**
 * 
 * @export
 * @interface CallMethodResult
 */
export interface CallMethodResult {
    /**
     * 
     * @type {number}
     * @memberof CallMethodResult
     */
    StatusCode?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof CallMethodResult
     */
    InputArgumentResults?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof CallMethodResult
     */
    InputArgumentDiagnosticInfos?: Array<DiagnosticInfo>;
    /**
     * 
     * @type {Array<object>}
     * @memberof CallMethodResult
     */
    OutputArguments?: Array<object>;
}

/**
 * Check if a given object implements the CallMethodResult interface.
 */
export function instanceOfCallMethodResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CallMethodResultFromJSON(json: any): CallMethodResult {
    return CallMethodResultFromJSONTyped(json, false);
}

export function CallMethodResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallMethodResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'StatusCode': !exists(json, 'StatusCode') ? undefined : json['StatusCode'],
        'InputArgumentResults': !exists(json, 'InputArgumentResults') ? undefined : json['InputArgumentResults'],
        'InputArgumentDiagnosticInfos': !exists(json, 'InputArgumentDiagnosticInfos') ? undefined : ((json['InputArgumentDiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
        'OutputArguments': !exists(json, 'OutputArguments') ? undefined : json['OutputArguments'],
    };
}

export function CallMethodResultToJSON(value?: CallMethodResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StatusCode': value.StatusCode,
        'InputArgumentResults': value.InputArgumentResults,
        'InputArgumentDiagnosticInfos': value.InputArgumentDiagnosticInfos === undefined ? undefined : ((value.InputArgumentDiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
        'OutputArguments': value.OutputArguments,
    };
}

