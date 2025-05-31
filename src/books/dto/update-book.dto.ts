import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsEnum, IsIn, IsOptional, IsString } from 'class-validator';
import { BookStatus } from '../enum/bookStatus.enum';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    author?: string;
    
    @IsEnum(BookStatus)
    @IsOptional()
    status?: BookStatus;
}
