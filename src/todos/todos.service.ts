import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateToDoDto } from "./dto/create-todo.dto";
import { Todo } from "./todos.model";

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async createToDo(dto: CreateToDoDto) {
    const todo = await this.todoRepository.create(dto);
    return todo;
  }

  async getAllTodos() {
    const todos = await this.todoRepository.findAll();
    return todos;
  }

  async getTodo(id: number) {
      
    if (!id) return null;
    const todo = await this.todoRepository.findOne({where: {id}});
    return todo;
  }

  async updateTodo(id: number, dto: CreateToDoDto) {
    
    const toUpdate = await this.todoRepository.findOne({where: {id}});
    toUpdate.title = dto.title;
    return toUpdate;
  }


  async deleteTodo(id: number) {

    const todo = await this.todoRepository.findOne({where: {id}});
    this.todoRepository.destroy({where: {id}})
  }
}
