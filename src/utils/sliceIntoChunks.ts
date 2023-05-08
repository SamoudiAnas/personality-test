/**
 * Slices an array into smaller chunks of a specified size.
 */
export function sliceIntoChunks(arr: string[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }

  return res;
}
