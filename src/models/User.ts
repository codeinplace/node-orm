import { Entity, Column, OneToOne, PrimaryColumn } from '../decorators';
import { Profile } from './Profile';

@Entity({ database: 'test', table: 'user' })
export class User {

    @PrimaryColumn()
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
