import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProjectDto } from '../dto/project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async getProject(id: number): Promise<ProjectDto> {
    const project = await this.projectRepository.findOne({ where: { id: id } });

    if (!project) {
      throw new NotFoundException('project not found');
    }

    return project;
  }

  async getProjects(): Promise<ProjectDto[]> {
    return await this.projectRepository.find();
  }

  async createProject(dto: ProjectDto): Promise<ProjectDto> {
    const newProject = this.projectRepository.create(dto);

    return await this.projectRepository.save(newProject);
  }

  async updateProject(dto: ProjectDto): Promise<ProjectDto> {
    const id = dto.id;

    if (!id) {
      throw new BadRequestException('id is required');
    }

    const project = await this.getProject(dto.id);

    this.projectRepository.merge(project, dto);

    return await this.projectRepository.save(project);
  }

  async deleteProject(id: number): Promise<void> {
    await this.getProject(id);
    this.projectRepository.delete(id);
  }
}
