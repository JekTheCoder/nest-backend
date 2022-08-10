import { IsNotEmpty, IsString } from "class-validator";

export class NoteCreationDto {
    @IsString()
    @IsNotEmpty()
    content: string;
}
