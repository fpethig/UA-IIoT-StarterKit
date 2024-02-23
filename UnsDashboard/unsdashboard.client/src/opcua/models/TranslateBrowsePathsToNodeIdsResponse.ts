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
import type { BrowsePathResult } from './BrowsePathResult';
import {
    BrowsePathResultFromJSON,
    BrowsePathResultFromJSONTyped,
    BrowsePathResultToJSON,
} from './BrowsePathResult';
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
 * @interface TranslateBrowsePathsToNodeIdsResponse
 */
export interface TranslateBrowsePathsToNodeIdsResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof TranslateBrowsePathsToNodeIdsResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<BrowsePathResult>}
     * @memberof TranslateBrowsePathsToNodeIdsResponse
     */
    Results?: Array<BrowsePathResult>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof TranslateBrowsePathsToNodeIdsResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the TranslateBrowsePathsToNodeIdsResponse interface.
 */
export function instanceOfTranslateBrowsePathsToNodeIdsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslateBrowsePathsToNodeIdsResponseFromJSON(json: any): TranslateBrowsePathsToNodeIdsResponse {
    return TranslateBrowsePathsToNodeIdsResponseFromJSONTyped(json, false);
}

export function TranslateBrowsePathsToNodeIdsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslateBrowsePathsToNodeIdsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': !exists(json, 'Results') ? undefined : ((json['Results'] as Array<any>).map(BrowsePathResultFromJSON)),
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function TranslateBrowsePathsToNodeIdsResponseToJSON(value?: TranslateBrowsePathsToNodeIdsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
        'Results': value.Results === undefined ? undefined : ((value.Results as Array<any>).map(BrowsePathResultToJSON)),
        'DiagnosticInfos': value.DiagnosticInfos === undefined ? undefined : ((value.DiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}
