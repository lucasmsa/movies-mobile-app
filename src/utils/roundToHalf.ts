export const roundToHalf = (value: number, step: number) => { 
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}