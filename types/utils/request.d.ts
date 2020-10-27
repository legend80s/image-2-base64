/// <reference types="node" />
/**
 * @param {string} url
 */
export function getRequest(url: string): typeof import("http") | typeof import("https");
