/**
 * Convert image to base64.
 * @param {string} url url or local image patch
 * @returns {Promise<string>}
 */
export function imageToBase64(url: string): Promise<string>;
/**
 * Get file size in Byte from url or local path.
 * @param {string} endpoint
 * @returns {Promise<number>}
 */
export function getFileSize(endpoint: string): Promise<number>;
/**
 *
 * @param {string} url img url
 * @returns {Promise<string>}
 */
export function resolveExtFromRemote(url: string): Promise<string>;
/**
 * @param {string} path
 */
export function isRemoteFile(path: string): boolean;
