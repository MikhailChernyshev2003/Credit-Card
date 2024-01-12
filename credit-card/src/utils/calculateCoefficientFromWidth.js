import { initCardWidth } from "./constants";

export function calculateCoefficientFromWidth(width) {
  return width / initCardWidth;
}
