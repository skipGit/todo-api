import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateToDoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string;
}