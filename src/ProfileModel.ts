import { Entity, Column, PrimaryColumn } from './decorators';
import { User } from './UserModel';

@Entity()
export class Profile {

    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cnpj: number;

    @OneToOne()
    user: User;
}
