import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('No puedes dividir por cero');
    }
    return a / b;
  }
}
