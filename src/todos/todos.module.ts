import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TodosController } from "./todos.controller";
import { Todo } from "./todos.model";
import { TodosService } from "./todos.service";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [SequelizeModule.forFeature([Todo])],
})
export class TodosModule {}
