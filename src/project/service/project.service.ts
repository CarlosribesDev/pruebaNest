import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectDto } from '../dto/project.dto';

@Injectable()
export class ProjectService {
  private readonly projects: any[] = [
    {
      id: 1,
      name: 'project 1',
      description: 'project 1 description',
    },
    {
      id: 2,
      name: 'project 2',
      description: 'project 2 description',
    },
    {
      id: 3,
      name: 'project 3',
      description: 'project 3 description',
    },
  ];

  getProject(id: number): any {
    const project = this.projects.find((project) => project.id === id);

    if (!project) {
      throw new NotFoundException('project not found');
    }

    return project;
  }

  getProjects(): any[] {
    return this.projects;
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
