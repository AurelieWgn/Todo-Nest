import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  done: boolean;
}

// The Todo table has been created automatically in database. No migration needed.