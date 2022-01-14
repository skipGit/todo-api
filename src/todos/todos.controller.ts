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
  createTodo(@Body() todoDto: CreateToDoDto) {
    return this.todosService.createToDo(todoDto);
  }

  @Get()
  getAll() {
    return this.todosService.getAllTodos();
  }

  @Get("/:id")
  getTodo(@Param("id") id: number) {
    return this.todosService.getTodo(id);
  }

  @Patch("/:id")
  updateTodo(@Param("id") id: number, @Body("title") todoTitle: string) {
    return this.todosService.updateTodo(id, todoTitle);
  }

  @Delete("/:id")
  deleteTodo(@Param("id") id: number) {
    this.todosService.deleteTodo(id);
  }
}
