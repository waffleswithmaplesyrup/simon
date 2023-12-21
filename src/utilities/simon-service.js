import { encodeSequenceAPI } from "./simon-api";

export async function encodeSequenceService(sequence) {
  const token = await encodeSequenceAPI(sequence);
  return token.token;
}