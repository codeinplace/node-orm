import { Entity, Column, PrimaryColumn, OneToOne } from '../decorators';
import { User } from './User';

@Entity({ database: 'my_database', table: 'profile' })
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
