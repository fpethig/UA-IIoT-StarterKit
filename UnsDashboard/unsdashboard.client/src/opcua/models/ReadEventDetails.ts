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
import type { EventFilter } from './EventFilter';
import {
    EventFilterFromJSON,
    EventFilterFromJSONTyped,
    EventFilterToJSON,
} from './EventFilter';

/**
 * 
 * @export
 * @interface ReadEventDetails
 */
export interface ReadEventDetails {
    /**
     * 
     * @type {number}
     * @memberof ReadEventDetails
     */
    NumValuesPerNode?: number;
    /**
     * 
     * @type {Date}
     * @memberof ReadEventDetails
     */
    StartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReadEventDetails
     */
    EndTime?: Date;
    /**
     * 
     * @type {EventFilter}
     * @memberof ReadEventDetails
     */
    Filter?: EventFilter;
}

/**
 * Check if a given object implements the ReadEventDetails interface.
 */
export function instanceOfReadEventDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadEventDetailsFromJSON(json: any): ReadEventDetails {
    return ReadEventDetailsFromJSONTyped(json, false);
}

export function ReadEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadEventDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NumValuesPerNode': !exists(json, 'NumValuesPerNode') ? undefined : json['NumValuesPerNode'],
        'StartTime': !exists(json, 'StartTime') ? undefined : (new Date(json['StartTime'])),
        'EndTime': !exists(json, 'EndTime') ? undefined : (new Date(json['EndTime'])),
        'Filter': !exists(json, 'Filter') ? undefined : EventFilterFromJSON(json['Filter']),
    };
}

export function ReadEventDetailsToJSON(value?: ReadEventDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NumValuesPerNode': value.NumValuesPerNode,
        'StartTime': value.StartTime === undefined ? undefined : (value.StartTime.toISOString()),
        'EndTime': value.EndTime === undefined ? undefined : (value.EndTime.toISOString()),
        'Filter': EventFilterToJSON(value.Filter),
    };
}

