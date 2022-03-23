import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import ICreateUser from 'src/create-user/create-user-dto';

@Injectable()
export default class SendMailProducerService {
  constructor(@InjectQueue('sendEmail-queue') private queue: Queue) {}

  async execute(createUser: ICreateUser) {
    await this.queue.add('sendEmail-job', createUser);
  }
}
