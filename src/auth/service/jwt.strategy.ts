import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService, @InjectRepository(User) private userRepo: Repository<User>,) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.getOrThrow('jwt.token')
        })
    }

    async validate(payload: { sub: number, username: string }) {
        const user = await this.userRepo.findOneBy({ id: payload.sub, username: payload.username });
        if (!user) throw new UnauthorizedException();

        return user;
    }
}
