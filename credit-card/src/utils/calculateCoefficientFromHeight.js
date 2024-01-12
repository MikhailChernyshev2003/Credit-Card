import { initCardHeight } from "./constants";

export function calculateCoefficientFromHeight(height) {
  return height / initCardHeight;
}
