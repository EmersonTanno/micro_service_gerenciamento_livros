import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {

  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<Book>
  ){}

  async create(createBookDto: CreateBookDto) {
    try {
      const book = new this.bookModel(createBookDto);

      return await book.save();
    } catch(e)
    {
      throw new BadRequestException(e.message);
    }
  }

  async findAll() {
    try{
      const books = await this.bookModel.find();

      if(books.length == 0){
        return "No Books Registered"
      }

      return books;
    }catch (e)
    {
      throw new BadRequestException(e.message);
    }
  }

  async findOne(id: string) {
    try{
      const findedBook = await this.bookModel.findById(id);

      if(!findedBook){
        throw new NotFoundException(`Book with id: ${id} not found`);
      }
    }catch(e)
    {
      if(e instanceof(NotFoundException)){
        throw e;
      }
      throw new BadRequestException(e.message);
    }
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    try
    {
      const findedBook = await this.bookModel.findById(id);

      if(!findedBook)
      {
        throw new NotFoundException(`Book with id ${id} not found`);
      }

      const updatedBook = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {new: true});
    }catch(e)
    {
      if(e instanceof(NotFoundException)){
        throw e;
      }
      throw new BadRequestException(e.message);
    }
  }
}
