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
  getProject(@Param('id', ParseIntPipe) id: number): ProjectDto {
    return this.projectService.getProject(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProject(@Body() project: ProjectDto): ProjectDto {
    return this.projectService.createProject(project);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateProject(@Body() project: ProjectDto): ProjectDto {
    return this.projectService.updateProject(project);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteProject(@Param('id') id: number): string {
    return this.projectService.deleteProject(id);
  }
}
