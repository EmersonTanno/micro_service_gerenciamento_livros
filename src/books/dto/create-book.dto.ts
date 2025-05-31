import { IsEnum, IsIn, IsNotEmpty, IsString } from "class-validator";
import { BookStatus } from "../enum/bookStatus.enum";

export class CreateBookDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;
}
