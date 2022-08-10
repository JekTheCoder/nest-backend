import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entities/note.entity';
import { NotesController } from './controller/notes.controller';
import { NotesService } from './service/notes.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [TypeOrmModule.forFeature([Note])]
})
export class NotesModule {}
