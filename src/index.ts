import { User } from "./models/User";
import { Repository } from "./Repository";
import { Application } from "./Applicaton";

class Test {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = new Repository<User>(User);
    }

    async listProducts() {
        const result = await this.userRepository.findAll({
            where: {
                id: 1,
                address: 1
            }
        });
        console.log(result);
    }
}

new Application().init();
new Test().listProducts();
