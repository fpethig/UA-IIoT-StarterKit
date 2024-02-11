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
import type { NodeId } from './NodeId';
import {
    NodeIdFromJSON,
    NodeIdFromJSONTyped,
    NodeIdToJSON,
} from './NodeId';

/**
 * 
 * @export
 * @interface UpdateStructureDataDetails
 */
export interface UpdateStructureDataDetails {
    /**
     * 
     * @type {NodeId}
     * @memberof UpdateStructureDataDetails
     */
    NodeId?: NodeId;
    /**
     * 
     * @type {number}
     * @memberof UpdateStructureDataDetails
     */
    PerformInsertReplace?: number;
    /**
     * 
     * @type {Array<DataValue>}
     * @memberof UpdateStructureDataDetails
     */
    UpdateValues?: Array<DataValue>;
}

/**
 * Check if a given object implements the UpdateStructureDataDetails interface.
 */
export function instanceOfUpdateStructureDataDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateStructureDataDetailsFromJSON(json: any): UpdateStructureDataDetails {
    return UpdateStructureDataDetailsFromJSONTyped(json, false);
}

export function UpdateStructureDataDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateStructureDataDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NodeId': !exists(json, 'NodeId') ? undefined : NodeIdFromJSON(json['NodeId']),
        'PerformInsertReplace': !exists(json, 'PerformInsertReplace') ? undefined : json['PerformInsertReplace'],
        'UpdateValues': !exists(json, 'UpdateValues') ? undefined : ((json['UpdateValues'] as Array<any>).map(DataValueFromJSON)),
    };
}

export function UpdateStructureDataDetailsToJSON(value?: UpdateStructureDataDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NodeId': NodeIdToJSON(value.NodeId),
        'PerformInsertReplace': value.PerformInsertReplace,
        'UpdateValues': value.UpdateValues === undefined ? undefined : ((value.UpdateValues as Array<any>).map(DataValueToJSON)),
    };
}

