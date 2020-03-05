import { KeysOfNonType } from './KeysOfNonType';

export interface FindAllOptions<Entity = any> {
    select?: (keyof Entity)[];
    relations?: KeysOfNonType<Entity, number | string | Date>[];
    where?: { [K in keyof Entity]?: any };
}

export interface FindOneOptions<Entity = any> {
    select?: (keyof Entity)[];
    relations?: KeysOfNonType<Entity, number | string | Date>[];
}

export interface FindByKeyOptions<Entity = any> {
    select?: (keyof Entity)[];
    relations?: KeysOfNonType<Entity, number | string | Date>[];
}
