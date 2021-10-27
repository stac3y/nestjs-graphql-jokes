import { HttpModule, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { JokesResolver } from './jokes.resolver'
import { JokesService } from './jokes.service'

@Module({
    imports: [HttpModule, ConfigService],
    providers: [JokesService, JokesResolver],
    exports: [JokesService],
})
export class JokesModule {}
