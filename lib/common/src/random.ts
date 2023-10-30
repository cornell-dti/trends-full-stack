export const rng = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const coinflip = () => rng(0, 1) === 1;
