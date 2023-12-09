import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from '../service/project.service';
import { ProjectDto } from '../dto/project.dto';

describe('ProjectController', () => {
  let controller: ProjectController;
  let mockProjectService: Partial<ProjectService>;

  beforeEach(async () => {
    mockProjectService = {
      getProject: jest.fn().mockResolvedValue(new ProjectDto()),
      getProjects: jest.fn().mockResolvedValue([new ProjectDto()]),
      createProject: jest.fn().mockResolvedValue(new ProjectDto()),
      updateProject: jest.fn().mockResolvedValue(new ProjectDto()),
      deleteProject: jest.fn().mockResolvedValue(undefined),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: ProjectService,
          useValue: mockProjectService,
        },
      ],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
