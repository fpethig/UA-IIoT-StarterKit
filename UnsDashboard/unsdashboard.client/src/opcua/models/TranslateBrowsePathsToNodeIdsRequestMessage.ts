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
import type { TranslateBrowsePathsToNodeIdsRequest } from './TranslateBrowsePathsToNodeIdsRequest';
import {
    TranslateBrowsePathsToNodeIdsRequestFromJSON,
    TranslateBrowsePathsToNodeIdsRequestFromJSONTyped,
    TranslateBrowsePathsToNodeIdsRequestToJSON,
} from './TranslateBrowsePathsToNodeIdsRequest';

/**
 * 
 * @export
 * @interface TranslateBrowsePathsToNodeIdsRequestMessage
 */
export interface TranslateBrowsePathsToNodeIdsRequestMessage {
    /**
     * 
     * @type {Array<string>}
     * @memberof TranslateBrowsePathsToNodeIdsRequestMessage
     */
    NamespaceUris?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranslateBrowsePathsToNodeIdsRequestMessage
     */
    ServerUris?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranslateBrowsePathsToNodeIdsRequestMessage
     */
    LocaleIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof TranslateBrowsePathsToNodeIdsRequestMessage
     */
    ServiceId?: number;
    /**
     * 
     * @type {TranslateBrowsePathsToNodeIdsRequest}
     * @memberof TranslateBrowsePathsToNodeIdsRequestMessage
     */
    Body?: TranslateBrowsePathsToNodeIdsRequest;
}

/**
 * Check if a given object implements the TranslateBrowsePathsToNodeIdsRequestMessage interface.
 */
export function instanceOfTranslateBrowsePathsToNodeIdsRequestMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslateBrowsePathsToNodeIdsRequestMessageFromJSON(json: any): TranslateBrowsePathsToNodeIdsRequestMessage {
    return TranslateBrowsePathsToNodeIdsRequestMessageFromJSONTyped(json, false);
}

export function TranslateBrowsePathsToNodeIdsRequestMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslateBrowsePathsToNodeIdsRequestMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NamespaceUris': !exists(json, 'NamespaceUris') ? undefined : json['NamespaceUris'],
        'ServerUris': !exists(json, 'ServerUris') ? undefined : json['ServerUris'],
        'LocaleIds': !exists(json, 'LocaleIds') ? undefined : json['LocaleIds'],
        'ServiceId': !exists(json, 'ServiceId') ? undefined : json['ServiceId'],
        'Body': !exists(json, 'Body') ? undefined : TranslateBrowsePathsToNodeIdsRequestFromJSON(json['Body']),
    };
}

export function TranslateBrowsePathsToNodeIdsRequestMessageToJSON(value?: TranslateBrowsePathsToNodeIdsRequestMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NamespaceUris': value.NamespaceUris,
        'ServerUris': value.ServerUris,
        'LocaleIds': value.LocaleIds,
        'ServiceId': value.ServiceId,
        'Body': TranslateBrowsePathsToNodeIdsRequestToJSON(value.Body),
    };
}
