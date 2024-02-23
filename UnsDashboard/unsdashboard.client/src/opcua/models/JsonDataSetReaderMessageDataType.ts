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
 * @interface JsonDataSetReaderMessageDataType
 */
export interface JsonDataSetReaderMessageDataType {
    /**
     * 
     * @type {number}
     * @memberof JsonDataSetReaderMessageDataType
     */
    NetworkMessageContentMask?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonDataSetReaderMessageDataType
     */
    DataSetMessageContentMask?: number;
}

/**
 * Check if a given object implements the JsonDataSetReaderMessageDataType interface.
 */
export function instanceOfJsonDataSetReaderMessageDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JsonDataSetReaderMessageDataTypeFromJSON(json: any): JsonDataSetReaderMessageDataType {
    return JsonDataSetReaderMessageDataTypeFromJSONTyped(json, false);
}

export function JsonDataSetReaderMessageDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonDataSetReaderMessageDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NetworkMessageContentMask': !exists(json, 'NetworkMessageContentMask') ? undefined : json['NetworkMessageContentMask'],
        'DataSetMessageContentMask': !exists(json, 'DataSetMessageContentMask') ? undefined : json['DataSetMessageContentMask'],
    };
}

export function JsonDataSetReaderMessageDataTypeToJSON(value?: JsonDataSetReaderMessageDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NetworkMessageContentMask': value.NetworkMessageContentMask,
        'DataSetMessageContentMask': value.DataSetMessageContentMask,
    };
}
