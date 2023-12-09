import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @Column()
  description: string;
}
