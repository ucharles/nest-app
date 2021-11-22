import { Controller, Get } from '@nestjs/common';

@Controller('') // home 화면일 경우
export class AppController {
  @Get()
  home() {
    return 'Welcome to my movie HP';
  }
}
