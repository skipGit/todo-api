import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TodosModule } from "./todos/todos.module";
import { ConfigModule } from "@nestjs/config";
import { Todo } from "./todos/todos.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_DB,
      models: [Todo],
      autoLoadModels: true,
    }),
    TodosModule,
  ],
})
export class AppModule {}
