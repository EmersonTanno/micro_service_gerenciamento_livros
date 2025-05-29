import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['disponível', 'reservado'], {
        message: 'Status deve ser "disponível" ou "reservado"',
    })
    status: string;

}
