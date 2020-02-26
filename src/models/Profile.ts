import { Entity, Column, PrimaryColumn, OneToOne } from '../decorators';
import { User } from './User';

@Entity({ database: 'test', table: 'profile' })
export class Profile {

    @PrimaryColumn()
    id: number;

    @Column()
    job_area: string;

    @Column()
    picture_path: string;

    @OneToOne()
    user: User;
}
