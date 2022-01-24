import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { CreateToDoDto } from "./dto/create-todo.dto";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async createTodo(@Body() todoDto: CreateToDoDto) {
    return this.todosService.createToDo(todoDto);
  }

  @Get()
  async getAll() {
    return this.todosService.getAllTodos();
  }

  @Get("/:id")
  async getTodo(@Param("id") id: number) {
    return this.todosService.getTodo(id);
  }

  @Patch("/:id/completed")
  async updateTodoComplete(@Param("id") id: number, @Body("isCompleted") completed: boolean) {
    return this.todosService.updateTodoComplete(id, completed);
  }

  @Patch("/:id")
  async updateTodoTitle(@Param("id") id: number, @Body("title") todoTitle: string) {
    return this.todosService.updateTodoTitle(id, todoTitle);
  }

  

  @Delete("/:id")
  async deleteTodo(@Param("id") id: number) {
    this.todosService.deleteTodo(id);
  }
}
