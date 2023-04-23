export function getDiamondArea(D: number, d: number): number {
    return d * D / 2;
}

export function getTrapezeArea(B: number, b: number, h: number): number {
    return ((B + b) * h) / 2;
}

export function getCircleArea(radius: number): number {
    return Math.PI * radius ** 2;
  }