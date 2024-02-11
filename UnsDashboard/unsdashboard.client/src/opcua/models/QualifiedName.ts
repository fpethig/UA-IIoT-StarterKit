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
 * @interface QualifiedName
 */
export interface QualifiedName {
    /**
     * 
     * @type {string}
     * @memberof QualifiedName
     */
    Name?: string;
    /**
     * 
     * @type {any}
     * @memberof QualifiedName
     */
    Uri?: any | null;
}

/**
 * Check if a given object implements the QualifiedName interface.
 */
export function instanceOfQualifiedName(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QualifiedNameFromJSON(json: any): QualifiedName {
    return QualifiedNameFromJSONTyped(json, false);
}

export function QualifiedNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualifiedName {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'Uri': !exists(json, 'Uri') ? undefined : json['Uri'],
    };
}

export function QualifiedNameToJSON(value?: QualifiedName | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.Name,
        'Uri': value.Uri,
    };
}

