import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    
    constructor(private todosService: TodosService) {

    }

    @Post()
    create(@Body() todoDto: CreateToDoDto) {
        return this.todosService.createToDo(todoDto);
    }

    @Get()
    getAll() {
        return this.todosService.getAllTodos();
    }

    @Get('/:id')
    getTodo(@Param('id') id: number) {
        return this.todosService.getTodo(id);
    }

    @Put('/:id')
    updateTodo(@Param('id') id:number, @Body() todoDto: CreateToDoDto) {
        return this.todosService.updateTodo(id, todoDto)        
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id: number) {
        this.todosService.deleteTodo(id);
    }


}
