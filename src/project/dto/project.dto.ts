import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class ProjectDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;
}
