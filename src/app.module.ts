import { Module } from '@nestjs/common';
import { ProjectController } from './project/controller/project.controller';
import { ProjectService } from './project/service/project.service';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AppModule {}
