//@ts-nocheck
import { User } from "./models/User";
import { Repository } from "./Repository";
import { Application } from "./Applicaton";

class Test {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = new Repository<User>(User);
    }

    async listProducts() {
        const result = await this.userRepository.find({
            select: ['username', 'name'],
            relations: ['profile'],
            where: {
                situacao: 'E',
                deleted_at: null,
                $or: [
                    Raw('ABS(PERIOD_DIFF(SUBSTR(v.data, 1, 6), SUBSTR(n.data_saida, 1, 6))) = 0'),
                    Raw('ABS(PERIOD_DIFF(SUBSTR(v.data, 1, 6), SUBSTR(n.data_saida, 1, 6))) = 1 AND v.data = ?', [data])
                ]
            }
        }); 
        console.log(result);
    }
}

new Application().init();
new Test().listProducts();

// AND n.situacao = 'E'
// AND n.deleted_at IS NULL
// AND (
//     (
//         ABS(
//             PERIOD_DIFF(SUBSTR(v.data, 1, 6), SUBSTR(n.data_saida, 1, 6))
//         ) = 0
//     )
//     OR (
//         ABS(
//             PERIOD_DIFF(SUBSTR(v.data, 1, 6), SUBSTR(n.data_saida, 1, 6))
//         ) = 1
//         AND v.data = ?
//     )
//     OR n.id_vinculo IS NULL
//     OR v.id IS NULL
// )

ABS(PERIOD_DIFF(SUBSTR(v.data, 1, 6), SUBSTR(n.data_saida, 1, 6))) = 1 AND v.data = ?