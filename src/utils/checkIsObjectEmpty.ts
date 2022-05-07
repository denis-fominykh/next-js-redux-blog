export function checkIsObjectEmpty(obj: Record<string, unknown>): boolean {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
}
