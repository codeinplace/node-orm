import { User } from './User';
import { BelongsTo, Entity, PrimaryColumn, Column } from '../model';

@Entity({ database: 'test', table: 'profile' })
export class Profile {
    @PrimaryColumn()
    id: number;

    @Column()
    job_area: string;

    @Column()
    picture_path: string;

    @BelongsTo((type) => User, { column: 'user_id', references: 'id' })
    user: User;

    @Column()
    created_at: Date;
}
