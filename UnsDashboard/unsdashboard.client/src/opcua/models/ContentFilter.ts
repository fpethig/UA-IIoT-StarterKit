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
import type { ContentFilterElement } from './ContentFilterElement';
import {
    ContentFilterElementFromJSON,
    ContentFilterElementFromJSONTyped,
    ContentFilterElementToJSON,
} from './ContentFilterElement';

/**
 * 
 * @export
 * @interface ContentFilter
 */
export interface ContentFilter {
    /**
     * 
     * @type {Array<ContentFilterElement>}
     * @memberof ContentFilter
     */
    Elements?: Array<ContentFilterElement>;
}

/**
 * Check if a given object implements the ContentFilter interface.
 */
export function instanceOfContentFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentFilterFromJSON(json: any): ContentFilter {
    return ContentFilterFromJSONTyped(json, false);
}

export function ContentFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Elements': !exists(json, 'Elements') ? undefined : ((json['Elements'] as Array<any>).map(ContentFilterElementFromJSON)),
    };
}

export function ContentFilterToJSON(value?: ContentFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Elements': value.Elements === undefined ? undefined : ((value.Elements as Array<any>).map(ContentFilterElementToJSON)),
    };
}

