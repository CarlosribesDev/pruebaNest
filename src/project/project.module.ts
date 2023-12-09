import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project.controller';
import { ProjectService } from './service/project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';

@Module({
  imports: [ProjectModule, TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
