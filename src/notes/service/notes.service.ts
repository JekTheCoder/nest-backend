import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
    
    constructor(@InjectRepository(Note) private notesRepo: Repository<Note>) {}

    findAll(userId: number) {
        return this.notesRepo.findBy({ userId });
    }

    findOne(id: number, userId: number) {
        return this.notesRepo.findOneBy({ id, userId });
    }

    createOne(note: Note) {
        return this.notesRepo.save(note);
    }

    async deleteOne(id: number, userId: number) {
        await this.notesRepo.delete({ id, userId });
    }
}
