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
import type { ExpandedNodeId } from './ExpandedNodeId';
import {
    ExpandedNodeIdFromJSON,
    ExpandedNodeIdFromJSONTyped,
    ExpandedNodeIdToJSON,
} from './ExpandedNodeId';

/**
 * 
 * @export
 * @interface BrowsePathTarget
 */
export interface BrowsePathTarget {
    /**
     * 
     * @type {ExpandedNodeId}
     * @memberof BrowsePathTarget
     */
    TargetId?: ExpandedNodeId;
    /**
     * 
     * @type {number}
     * @memberof BrowsePathTarget
     */
    RemainingPathIndex?: number;
}

/**
 * Check if a given object implements the BrowsePathTarget interface.
 */
export function instanceOfBrowsePathTarget(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowsePathTargetFromJSON(json: any): BrowsePathTarget {
    return BrowsePathTargetFromJSONTyped(json, false);
}

export function BrowsePathTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowsePathTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'TargetId': !exists(json, 'TargetId') ? undefined : ExpandedNodeIdFromJSON(json['TargetId']),
        'RemainingPathIndex': !exists(json, 'RemainingPathIndex') ? undefined : json['RemainingPathIndex'],
    };
}

export function BrowsePathTargetToJSON(value?: BrowsePathTarget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TargetId': ExpandedNodeIdToJSON(value.TargetId),
        'RemainingPathIndex': value.RemainingPathIndex,
    };
}
