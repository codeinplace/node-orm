import { Entity, Column, OneToOne } from './decorators';
import { Profile } from './ProfileModel';

@Entity({ database: 'dompedro_as', table: 'user' })
export class User {

    @Column()
    id: number;

    @Column()
    numero_nota: number;

    @Column()
    valor_nota: number;

    @OneToOne({ reference: "id" })
    profile: Profile;
}
