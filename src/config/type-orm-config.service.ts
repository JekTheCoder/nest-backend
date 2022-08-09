import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { DatabaseType } from "typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(_connectionName?: string | undefined): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        
        return {
            database: this.configService.getOrThrow<string>('database.name'),
            username: this.configService.getOrThrow<string>('database.user'),
            password: this.configService.getOrThrow<string>('database.password'),
            port: this.configService.getOrThrow<number>('database.port'),
            type: this.configService.getOrThrow<DatabaseType>('database.db') as any,
            synchronize: this.configService.get<boolean>('database.sync')
        };
    }
}
