import { ProjectService } from '../service/project.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from '../../common/pipe/parse-int.pipe';
import { ProjectDto } from '../dto/project.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getProject(@Param('id', ParseIntPipe) id: number): Promise<ProjectDto> {
    return this.projectService.getProject(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getProjects(): Promise<ProjectDto[]> {
    return this.projectService.getProjects();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProject(@Body() dto: ProjectDto): Promise<ProjectDto> {
    return this.projectService.createProject(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateProject(@Body() dto: ProjectDto): Promise<ProjectDto> {
    return this.projectService.updateProject(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteProject(@Param('id') id: number): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}
