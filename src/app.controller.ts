import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('add')
  add(@Body('a') a: number, @Body('b') b: number): number {
    return this.appService.add(a, b);
  }

  @Get('subtract')
  subtract(@Body('a') a: number, @Body('b') b: number): number {
    return this.appService.subtract(a, b);
  }

  @Get('multiply')
  multiply(@Body('a') a: number, @Body('b') b: number): number {
    return this.appService.multiply(a, b);
  }

  @Get('divide')
  divide(@Body('a') a: number, @Body('b') b: number): number {
    return this.appService.divide(a, b);
  }
}
