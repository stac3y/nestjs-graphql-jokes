import { Entity, Column } from 'typeorm'

import { CommonBaseEntity } from './common-base-entity.entity'

@Entity('users')
export class UserEntity extends CommonBaseEntity {
    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string
}
