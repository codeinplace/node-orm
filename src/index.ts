import { User } from "./UserModel";
import { Repository } from "./Repository";

class Test {
    nf: Repository<User>;

    constructor() {
        this.nf = new Repository<User>();
    }

    listProducts() {
        this.nf.findAll({
            // TODO: remove duplicates
            select: ['numero_nota'],
            relations: [''],
        })
    }
}

new Test();
