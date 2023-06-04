export function getUint16(buffer: ArrayBuffer, offset = 0) {
  const view = getBufferView(buffer, offset, 2);
  return view.getUint16(0, true);
}

export function getUint32(buffer: ArrayBuffer, offset = 0) {
  const view = getBufferView(buffer, offset, 4);
  return view.getUint32(0, true);
}

export function getString(
  buffer: ArrayBuffer,
  offset = 0,
  length = buffer.byteLength,
) {
  const slice = buffer.slice(offset, offset + length);
  return decoder.decode(new Uint8Array(slice));
}

export function bytesToHex(array: Uint8Array, separator = ' ') {
  const parts = [...array].map((x) => x.toString(16).padStart(2, '0'));
  return parts.join(separator);
}

function getBufferView(buffer: ArrayBuffer, offset: number, length: number) {
  const slice = buffer.slice(offset, offset + length);
  return new DataView(new Uint8Array(slice).buffer);
}

const decoder = new TextDecoder('utf8');
