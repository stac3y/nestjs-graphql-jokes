import { HttpModule, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { RefreshTokenEntity } from './entities/refresh-token.entity'


@Module({
    imports: [
        HttpModule,
        ConfigService,
        UsersModule,
        TypeOrmModule.forFeature([RefreshTokenEntity]),
    ],
    providers: [AuthService, AuthResolver],
    exports: [AuthService],
})
export class AuthModule {}
