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
  async getProject(@Param('id', ParseIntPipe) id: number): Promise<ProjectDto> {
    return await this.projectService.getProject(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getProjects(): Promise<ProjectDto[]> {
    return await this.projectService.getProjects();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProject(@Body() dto: ProjectDto): Promise<ProjectDto> {
    return this.projectService.createProject(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async updateProject(@Body() dto: ProjectDto): Promise<ProjectDto> {
    return this.projectService.updateProject(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteProject(@Param('id') id: number): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}
