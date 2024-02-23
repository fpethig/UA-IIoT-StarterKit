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
import type { DataValue } from './DataValue';
import {
    DataValueFromJSON,
    DataValueFromJSONTyped,
    DataValueToJSON,
} from './DataValue';
import type { ModificationInfo } from './ModificationInfo';
import {
    ModificationInfoFromJSON,
    ModificationInfoFromJSONTyped,
    ModificationInfoToJSON,
} from './ModificationInfo';

/**
 * 
 * @export
 * @interface HistoryModifiedData
 */
export interface HistoryModifiedData {
    /**
     * 
     * @type {Array<ModificationInfo>}
     * @memberof HistoryModifiedData
     */
    ModificationInfos?: Array<ModificationInfo>;
    /**
     * 
     * @type {Array<DataValue>}
     * @memberof HistoryModifiedData
     */
    DataValues?: Array<DataValue>;
}

/**
 * Check if a given object implements the HistoryModifiedData interface.
 */
export function instanceOfHistoryModifiedData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistoryModifiedDataFromJSON(json: any): HistoryModifiedData {
    return HistoryModifiedDataFromJSONTyped(json, false);
}

export function HistoryModifiedDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryModifiedData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ModificationInfos': !exists(json, 'ModificationInfos') ? undefined : ((json['ModificationInfos'] as Array<any>).map(ModificationInfoFromJSON)),
        'DataValues': !exists(json, 'DataValues') ? undefined : ((json['DataValues'] as Array<any>).map(DataValueFromJSON)),
    };
}

export function HistoryModifiedDataToJSON(value?: HistoryModifiedData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ModificationInfos': value.ModificationInfos === undefined ? undefined : ((value.ModificationInfos as Array<any>).map(ModificationInfoToJSON)),
        'DataValues': value.DataValues === undefined ? undefined : ((value.DataValues as Array<any>).map(DataValueToJSON)),
    };
}
