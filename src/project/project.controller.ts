import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('project')
export class ProjectController {
  @Get('/:id')
  getProject(@Param('id') id: number): string {
    return 'find by  id ' + id;
  }

  @Post()
  createProject(@Body() project: any): any {
    return project;
  }

  @Put()
  updateProject(@Body() project: any): any {
    return project;
  }

  @Delete('/:id')
  deleteProject(@Param('id') id: number): string {
    return 'delete by id ' + id;
  }
}
