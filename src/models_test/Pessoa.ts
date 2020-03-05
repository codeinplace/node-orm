import { Entity, Column, PrimaryColumn } from '../model';
import { Fatura } from './Fatura';
import { HasMany } from '../relation/HasMany';

@Entity({ database: 'test', table: 'pessoa' })
export class Pessoa {

    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @HasMany(type => Fatura, { column: 'user_id', references: 'id' })
    faturas: Fatura;
}
