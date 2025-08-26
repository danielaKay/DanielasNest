import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Article extends Model {
  @Column
  title: string;

  @Column
  description: number;

  @Column
  author: string;
}