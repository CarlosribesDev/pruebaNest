import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProjectDto } from '../dto/project.dto';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import config from '../../config';
import { Project } from '../entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(config.KEY)
    private readonly configService: ConfigType<typeof config>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async getProject(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id: id } });

    if (!project) {
      throw new NotFoundException('project not found');
    }

    return project;
  }

  async getProjects(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  createProject(project: ProjectDto): any {
    return project;
  }

  updateProject(project: any): any {
    return project;
  }

  deleteProject(id: number): string {
    return 'delete by id ' + id;
  }
}
