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
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
} from './KeyValuePair';
import type { RolePermissionType } from './RolePermissionType';
import {
    RolePermissionTypeFromJSON,
    RolePermissionTypeFromJSONTyped,
    RolePermissionTypeToJSON,
} from './RolePermissionType';

/**
 * 
 * @export
 * @interface SecurityGroupDataType
 */
export interface SecurityGroupDataType {
    /**
     * 
     * @type {string}
     * @memberof SecurityGroupDataType
     */
    Name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SecurityGroupDataType
     */
    SecurityGroupFolder?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof SecurityGroupDataType
     */
    KeyLifetime?: number;
    /**
     * 
     * @type {string}
     * @memberof SecurityGroupDataType
     */
    SecurityPolicyUri?: string;
    /**
     * 
     * @type {number}
     * @memberof SecurityGroupDataType
     */
    MaxFutureKeyCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SecurityGroupDataType
     */
    MaxPastKeyCount?: number;
    /**
     * 
     * @type {string}
     * @memberof SecurityGroupDataType
     */
    SecurityGroupId?: string;
    /**
     * 
     * @type {Array<RolePermissionType>}
     * @memberof SecurityGroupDataType
     */
    RolePermissions?: Array<RolePermissionType>;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof SecurityGroupDataType
     */
    GroupProperties?: Array<KeyValuePair>;
}

/**
 * Check if a given object implements the SecurityGroupDataType interface.
 */
export function instanceOfSecurityGroupDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SecurityGroupDataTypeFromJSON(json: any): SecurityGroupDataType {
    return SecurityGroupDataTypeFromJSONTyped(json, false);
}

export function SecurityGroupDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityGroupDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'SecurityGroupFolder': !exists(json, 'SecurityGroupFolder') ? undefined : json['SecurityGroupFolder'],
        'KeyLifetime': !exists(json, 'KeyLifetime') ? undefined : json['KeyLifetime'],
        'SecurityPolicyUri': !exists(json, 'SecurityPolicyUri') ? undefined : json['SecurityPolicyUri'],
        'MaxFutureKeyCount': !exists(json, 'MaxFutureKeyCount') ? undefined : json['MaxFutureKeyCount'],
        'MaxPastKeyCount': !exists(json, 'MaxPastKeyCount') ? undefined : json['MaxPastKeyCount'],
        'SecurityGroupId': !exists(json, 'SecurityGroupId') ? undefined : json['SecurityGroupId'],
        'RolePermissions': !exists(json, 'RolePermissions') ? undefined : ((json['RolePermissions'] as Array<any>).map(RolePermissionTypeFromJSON)),
        'GroupProperties': !exists(json, 'GroupProperties') ? undefined : ((json['GroupProperties'] as Array<any>).map(KeyValuePairFromJSON)),
    };
}

export function SecurityGroupDataTypeToJSON(value?: SecurityGroupDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.Name,
        'SecurityGroupFolder': value.SecurityGroupFolder,
        'KeyLifetime': value.KeyLifetime,
        'SecurityPolicyUri': value.SecurityPolicyUri,
        'MaxFutureKeyCount': value.MaxFutureKeyCount,
        'MaxPastKeyCount': value.MaxPastKeyCount,
        'SecurityGroupId': value.SecurityGroupId,
        'RolePermissions': value.RolePermissions === undefined ? undefined : ((value.RolePermissions as Array<any>).map(RolePermissionTypeToJSON)),
        'GroupProperties': value.GroupProperties === undefined ? undefined : ((value.GroupProperties as Array<any>).map(KeyValuePairToJSON)),
    };
}

