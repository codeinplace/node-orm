import { Entity, Column, OneToOne } from '../decorators';
import { Profile } from './Profile';

@Entity({ database: 'my_database', table: 'user' })
export class User {

    @Column()
    id: number;

    @Column()
    username: string;

    @Column()
    address: string;

    @OneToOne()
    profile: Profile;
}
