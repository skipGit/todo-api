import { Column, Model, Table, DataType } from "sequelize-typescript";

interface ToDoCreationAttrs {
  title: string;
}

@Table({ tableName: "todos" })
export class Todo extends Model<Todo, ToDoCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isCompleted: boolean;
}
