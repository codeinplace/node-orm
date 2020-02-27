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
                date: { $gt: 2010 },
                name: { $like: 'joe' },
                ???
            }
        });

        // OR https://github.com/typeorm/typeorm/blob/master/docs/find-options.md

        // WHERE date > 2010 AND name like '%joe%' OR username = 'Joe'
    }
}

new Application().init();
new Test().listProducts();
