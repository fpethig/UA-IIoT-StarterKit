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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
} from './ExtensionObject';

/**
 * 
 * @export
 * @interface ContentFilterElement
 */
export interface ContentFilterElement {
    /**
     * 
     * @type {number}
     * @memberof ContentFilterElement
     */
    FilterOperator?: number;
    /**
     * 
     * @type {Array<ExtensionObject>}
     * @memberof ContentFilterElement
     */
    FilterOperands?: Array<ExtensionObject>;
}

/**
 * Check if a given object implements the ContentFilterElement interface.
 */
export function instanceOfContentFilterElement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentFilterElementFromJSON(json: any): ContentFilterElement {
    return ContentFilterElementFromJSONTyped(json, false);
}

export function ContentFilterElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentFilterElement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'FilterOperator': !exists(json, 'FilterOperator') ? undefined : json['FilterOperator'],
        'FilterOperands': !exists(json, 'FilterOperands') ? undefined : ((json['FilterOperands'] as Array<any>).map(ExtensionObjectFromJSON)),
    };
}

export function ContentFilterElementToJSON(value?: ContentFilterElement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FilterOperator': value.FilterOperator,
        'FilterOperands': value.FilterOperands === undefined ? undefined : ((value.FilterOperands as Array<any>).map(ExtensionObjectToJSON)),
    };
}

