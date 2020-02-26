import { Entity, Column, OneToOne } from '../decorators';
import { Profile } from './Profile';

@Entity({ database: 'test', table: 'user' })
export class User {

    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    address: string;

    @OneToOne()
    profile: Profile;

    @Column()
    created_at: Date;
}
