import { Controller, Get, Query } from '@nestjs/common';
import { AddService } from './add.service';

@Controller('calc')
export class AddController {
      constructor(private readonly appService: AddService) {}

  @Get('add')
  async add(
    @Query('a') a: number,
    @Query('b') b: number
  ): Promise<{ result: number }> {
    const result = await this.appService.add(a, b);
    return { result };
  }
}

