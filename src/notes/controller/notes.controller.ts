import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/auth/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/service/jwt-auth.guard';
import { User as User_ } from 'src/entities/user.entity';
import { NotesService } from '../service/notes.service';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllNotes(@User() user: User_) {
        return this.notesService.findAll(user.id);
    }
}
