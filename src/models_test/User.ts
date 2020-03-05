import { Entity, Column, BelongsTo, PrimaryColumn } from '../model';
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

    @Column()
    created_at: Date;

    @BelongsTo((type) => Profile, { column: 'profile_id', references: 'id' })
    profile: Profile;
}
