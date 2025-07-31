import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('calculator')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    @Get('add')
  async add(
    @Query('a') a: number,
    @Query('b') b: number
  ): Promise<{ result: number }> {
    const result = await this.appService.add(a, b);
    return { result };
  }

}
