import { encodeSequenceAPI } from "./simon-api";

export async function encodeSequenceService(sequence) {
  const token = await encodeSequenceAPI(sequence);
  return token.token;
}

export function generateSequence() {
  const firstMove = choices[Math.floor(Math.random() * choices.length)];
}