import { User } from "./models/User";
import { Repository } from "./Repository";
import { Application } from "./Applicaton";

class Test {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = new Repository<User>(User);
    }

    async listProducts() {
        await this.userRepository.findAll();
    }
}

new Application().init();
new Test().listProducts();
