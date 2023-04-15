import { AppService } from '../app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = appService.add(a, b);

      // Assert
      expect(result).toEqual(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      // Arrange
      const a = 5;
      const b = 3;

      // Act
      const result = appService.subtract(a, b);

      // Assert
      expect(result).toEqual(2);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = appService.multiply(a, b);

      // Assert
      expect(result).toEqual(6);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      // Arrange
      const a = 10;
      const b = 2;

      // Act
      const result = appService.divide(a, b);

      // Assert
      expect(result).toEqual(5);
    });

    it('should throw an error when dividing by zero', () => {
      // Arrange
      const a = 10;
      const b = 0;

      // Act & Assert
      expect(() => appService.divide(a, b)).toThrowError(
        'No puedes dividir por cero',
      );
    });
  });
});
