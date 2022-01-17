import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Hello World!';
  }

  @Post('sendEmail')
  sendEmail(@Body('email') email, @Body('status') status) {
    console.log(`email`, email);
    return this.appService.sendEmail(email, status);
  }
}
