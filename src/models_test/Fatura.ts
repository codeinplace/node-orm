import { Entity, Column, PrimaryColumn } from '../decorators';
import { Pessoa } from './Pessoa';
import { BelongsTo } from '../relation/BelongsTo';

@Entity({ database: 'test', table: 'pessoa' })
export class Fatura {

    @PrimaryColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    valor: string;

    @BelongsTo(type => Pessoa, { column: 'pessoa', references: 'id' })
    pessoaInfo: Pessoa;

    @BelongsTo(type => Pessoa, { column: 'empresa', references: 'id' })
    empresa_info: Pessoa;
}
