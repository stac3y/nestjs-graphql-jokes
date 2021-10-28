import { HttpModule, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { AuthModule } from '../auth/auth.module'

import { JokesResolver } from './jokes.resolver'
import { JokesService } from './jokes.service'

@Module({
    imports: [HttpModule, ConfigService, AuthModule],
    providers: [JokesService, JokesResolver],
    exports: [JokesService],
})
export class JokesModule {}
