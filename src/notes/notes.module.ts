import { Module } from '@nestjs/common';
import { NotesController } from './controller/notes.controller';
import { NotesService } from './service/notes.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
