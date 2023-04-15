import { Test } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService);
  });

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;
      jest.spyOn(appService, 'add').mockReturnValueOnce(5);

      // Act
      const result = appController.add(a, b);

      // Assert
      expect(appService.add).toHaveBeenCalledWith(a, b);
      expect(result).toEqual(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      // Arrange
      const a = 5;
      const b = 3;
      jest.spyOn(appService, 'subtract').mockReturnValueOnce(2);

      // Act
      const result = appController.subtract(a, b);

      // Assert
      expect(appService.subtract).toHaveBeenCalledWith(a, b);
      expect(result).toEqual(2);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;
      jest.spyOn(appService, 'multiply').mockReturnValueOnce(6);

      // Act
      const result = appController.multiply(a, b);

      // Assert
      expect(appService.multiply).toHaveBeenCalledWith(a, b);
      expect(result).toEqual(6);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      // Arrange
      const a = 10;
      const b = 2;
      jest.spyOn(appService, 'divide').mockReturnValueOnce(5);

      // Act
      const result = appController.divide(a, b);

      // Assert
      expect(appService.divide).toHaveBeenCalledWith(a, b);
      expect(result).toEqual(5);
    });

    it('should throw an error when dividing by zero', () => {
      // Arrange
      const a = 10;
      const b = 0;
      jest.spyOn(appService, 'divide').mockImplementation(() => {
        throw new Error('No puedes dividir por cero');
      });

      // Act & Assert
      expect(() => appController.divide(a, b)).toThrowError(
        'No puedes dividir por cero',
      );
    });
  });
});
