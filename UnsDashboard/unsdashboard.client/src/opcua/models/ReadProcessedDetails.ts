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
import type { AggregateConfiguration } from './AggregateConfiguration';
import {
    AggregateConfigurationFromJSON,
    AggregateConfigurationFromJSONTyped,
    AggregateConfigurationToJSON,
} from './AggregateConfiguration';
import type { NodeId } from './NodeId';
import {
    NodeIdFromJSON,
    NodeIdFromJSONTyped,
    NodeIdToJSON,
} from './NodeId';

/**
 * 
 * @export
 * @interface ReadProcessedDetails
 */
export interface ReadProcessedDetails {
    /**
     * 
     * @type {Date}
     * @memberof ReadProcessedDetails
     */
    StartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReadProcessedDetails
     */
    EndTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof ReadProcessedDetails
     */
    ProcessingInterval?: number;
    /**
     * 
     * @type {Array<NodeId>}
     * @memberof ReadProcessedDetails
     */
    AggregateType?: Array<NodeId>;
    /**
     * 
     * @type {AggregateConfiguration}
     * @memberof ReadProcessedDetails
     */
    AggregateConfiguration?: AggregateConfiguration;
}

/**
 * Check if a given object implements the ReadProcessedDetails interface.
 */
export function instanceOfReadProcessedDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadProcessedDetailsFromJSON(json: any): ReadProcessedDetails {
    return ReadProcessedDetailsFromJSONTyped(json, false);
}

export function ReadProcessedDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadProcessedDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'StartTime': !exists(json, 'StartTime') ? undefined : (new Date(json['StartTime'])),
        'EndTime': !exists(json, 'EndTime') ? undefined : (new Date(json['EndTime'])),
        'ProcessingInterval': !exists(json, 'ProcessingInterval') ? undefined : json['ProcessingInterval'],
        'AggregateType': !exists(json, 'AggregateType') ? undefined : ((json['AggregateType'] as Array<any>).map(NodeIdFromJSON)),
        'AggregateConfiguration': !exists(json, 'AggregateConfiguration') ? undefined : AggregateConfigurationFromJSON(json['AggregateConfiguration']),
    };
}

export function ReadProcessedDetailsToJSON(value?: ReadProcessedDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StartTime': value.StartTime === undefined ? undefined : (value.StartTime.toISOString()),
        'EndTime': value.EndTime === undefined ? undefined : (value.EndTime.toISOString()),
        'ProcessingInterval': value.ProcessingInterval,
        'AggregateType': value.AggregateType === undefined ? undefined : ((value.AggregateType as Array<any>).map(NodeIdToJSON)),
        'AggregateConfiguration': AggregateConfigurationToJSON(value.AggregateConfiguration),
    };
}

