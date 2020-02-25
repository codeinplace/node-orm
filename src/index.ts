import { NotaFiscalModel } from "./NotaFiscalModel";
import { Repository } from "./Repository";

class Test {
    nf: Repository<NotaFiscalModel>;

    constructor() {
        this.nf = new Repository<NotaFiscalModel>();
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
