import { ObjectLiteral } from "./ObjectLiteral";

interface FindAllOptions<Entity = any> {
    // TODO: remove duplicates
    select?: (keyof Entity)[];
    relations: string[];
}

export class Repository<Entity extends ObjectLiteral> {

    findAll(options?: FindAllOptions<Entity>) {
        return [1, 2, 3, 4, 5];
    }

    findOne() {
        return 1;
    }

    findById(id: number) {
        return 100;
    }

    relations(relations: string[]) {

    }
}
