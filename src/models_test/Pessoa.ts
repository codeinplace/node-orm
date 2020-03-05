import { Entity, PrimaryColumn, HasMany, Column } from '../model';
import { Fatura } from './Fatura';

@Entity({ database: 'test', table: 'pessoa' })
export class Pessoa {
    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @HasMany((type) => Fatura, { column: 'user_id', references: 'id' })
    faturas: Fatura;
}
