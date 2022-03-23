import { Body, Controller, Post } from '@nestjs/common';
import SendMailProducerService from 'src/jobs/sendMail-producer.service';
import ICreateUser from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendEmailService: SendMailProducerService) {}

  @Post('/')
  async sendMail(@Body() createUser: ICreateUser) {
    await this.sendEmailService.execute(createUser);
    return createUser;
  }
}
