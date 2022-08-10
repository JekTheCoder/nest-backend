import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/entities/note.entity';
import { Repository } from 'typeorm';
import { NoteCreationDto } from '../dto/note-creation.dto';

@Injectable()
export class NotesService {
    
    constructor(@InjectRepository(Note) private notesRepo: Repository<Note>) {}

    findAll(userId: number) {
        return this.notesRepo.findBy({ userId });
    }

    findOne(id: number, userId: number) {
        return this.notesRepo.findOneBy({ id, userId });
    }

    createOne(userId: number, note: NoteCreationDto) {
        return this.notesRepo.save({ ...note, userId });
    }

    async deleteOne(id: number, userId: number) {
        const result =  await this.notesRepo.delete({ id, userId });
        return result.affected !== 0;
    }
}
