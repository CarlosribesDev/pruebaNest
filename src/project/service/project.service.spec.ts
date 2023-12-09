import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Project } from '../entity/project.entity';
import { Repository } from 'typeorm';

describe('ProjectService', () => {
  let service: ProjectService;
  let mockRepository: Partial<Repository<Project>>;
  const projectID = 5;
  const project = new Project();
  project.id = projectID;

  beforeEach(async () => {
    mockRepository = {
      findOne: jest.fn().mockResolvedValue(project),
      find: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
      merge: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a project if it exists', async () => {
    const project = await service.getProject(projectID);

    expect(project).toBeDefined();
    expect(project.id).toEqual(projectID);
  });
});
