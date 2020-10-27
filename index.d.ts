declare module '@legend80s/image-to-base64' {
  function getFileSize(endpoint: string): Promise<number>;
  function imageToBase64(url: string): Promise<string>;
}
