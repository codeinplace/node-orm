import { Entity, Column } from './decorators';
import { Profile } from './ProfileModel';

@Entity()
export class User {

    @Column()
    id: number;

    @Column()
    numero_nota: number;

    @Column()
    valor_nota: number;

    @OneToOne()
    profile: Profile;
}
