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
 * @interface NodeId
 */
export interface NodeId {
    /**
     * 
     * @type {number}
     * @memberof NodeId
     */
    IdType?: number;
    /**
     * 
     * @type {any}
     * @memberof NodeId
     */
    Id?: any | null;
    /**
     * 
     * @type {number}
     * @memberof NodeId
     */
    Namespace?: number;
}

/**
 * Check if a given object implements the NodeId interface.
 */
export function instanceOfNodeId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NodeIdFromJSON(json: any): NodeId {
    return NodeIdFromJSONTyped(json, false);
}

export function NodeIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'IdType': !exists(json, 'IdType') ? undefined : json['IdType'],
        'Id': !exists(json, 'Id') ? undefined : json['Id'],
        'Namespace': !exists(json, 'Namespace') ? undefined : json['Namespace'],
    };
}

export function NodeIdToJSON(value?: NodeId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'IdType': value.IdType,
        'Id': value.Id,
        'Namespace': value.Namespace,
    };
}

