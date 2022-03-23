import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import ICreateUser from 'src/create-user/create-user-dto';

@Processor('sendEmail-queue')
export default class SendEmailConsumer {
  constructor(private mailerService: MailerService) {}

  @Process('sendEmail-job')
  async sendEmailJob(job: Job<ICreateUser>) {
    const { data } = job;

    await this.mailerService.sendMail({
      to: data.email,
      from: 'Equipe Maiself <no-reply@maiself.com.br>',
      subject: 'Seja bem vindo(a)!',
      text: `Bem vindo(a) agora você pode desfrutar ao máximo da organização pessoal`,
    });
  }
}
