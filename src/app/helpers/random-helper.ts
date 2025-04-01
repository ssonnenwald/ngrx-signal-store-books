export class RandomHelper {
  static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  static getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  static getRandomElement<T>(array: T[]): T {
    return array[RandomHelper.getRandomInt(0, array.length - 1)];
  }

  static getRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        RandomHelper.getRandomInt(0, characters.length - 1)
      );
    }
    return result;
  }
}
