import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100, unique: true })
  readonly name: string;

  @Column()
  readonly description: string;
}
