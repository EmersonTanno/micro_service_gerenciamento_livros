import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Book {

    @Prop({ required: true })
    title: string;
    
    @Prop({ required: true })
    author: string;

    @Prop({ required: true })
    status: string;

}
export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);

