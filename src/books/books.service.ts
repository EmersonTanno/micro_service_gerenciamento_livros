import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './entities/book.entity';
import { Model } from 'mongoose';
import { BookStatus } from './enum/bookStatus.enum';

@Injectable()
export class BooksService {

  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>
  ){}

  async create(createBookDto: CreateBookDto) {
    try {
      let book = new this.bookModel(createBookDto);

      book.status = BookStatus.DISPONIVEL;

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

      return findedBook;
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

      return await this.bookModel.findByIdAndUpdate(id, updateBookDto, {new: true});
    }catch(e)
    {
      if(e instanceof(NotFoundException)){
        throw e;
      }
      throw new BadRequestException(e.message);
    }
  }

  async updateStatus(id: string) {
    try{
      const findedBook = await this.bookModel.findById(id);

      if(!findedBook){
        throw new NotFoundException(`Book with id: ${id} not found`);
      }
      
      var newStatus : BookStatus;

      if(findedBook.status == BookStatus.DISPONIVEL){
        newStatus = BookStatus.RESERVADO;
      } else {
        newStatus = BookStatus.DISPONIVEL;
      }

      return await this.bookModel.findByIdAndUpdate(
        id,
        { $set: { status: newStatus } },
        { new: true },
      );

    }catch(e)
    {
      if(e instanceof(NotFoundException)){
        throw e;
      }
      throw new BadRequestException(e.message);
    }
  }
}
