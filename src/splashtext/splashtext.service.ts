import { Injectable } from '@nestjs/common';

@Injectable()
export class SplashtextService {
  private splashtexts = [
    'React',
    'HTML',
    'CSS3',
    'Java_Script',
    'Laboratory',
    'GIT',
    'SCSS',
    'NodeJS',
    'Docker',
  ];

  findAll() {
    return this.splashtexts;
  }
}
