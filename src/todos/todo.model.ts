import { IsNotEmpty } from 'class-validator';
import { Column, Table, Model, Length } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @IsNotEmpty()
  @Length({ min: 10, max: 30 })
  @Column
  title: string;

  @Column
  description: string;

  @Column
  done: boolean;
}

// The Todo table has been created automatically in database. No migration needed.
