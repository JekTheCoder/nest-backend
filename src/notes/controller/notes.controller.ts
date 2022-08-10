import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/auth/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/service/jwt-auth.guard';
import { User as User_ } from 'src/entities/user.entity';
import { NoteCreationDto } from '../dto/note-creation.dto';
import { NotesService } from '../service/notes.service';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllNotes(@User() user: User_) {
        return this.notesService.findAll(user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createNote(@User() user: User_, @Body() note: NoteCreationDto) {
        return this.notesService.createOne(user.id, note);
    }
}
