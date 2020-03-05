//@ts-nocheck
import { Profile } from "./models_test/Profile";
import { Repository } from "./Repository";
import { Application } from "./Applicaton";

class Test {
    profileRepository: Repository<Profile>;

    constructor() {
        this.profileRepository = new Repository<Profile>(Profile);
    }

    async listProducts() {
        const result = await this.profileRepository.find({
            relations: [
                { name: 'user', joinType: 'inner' }
            ]
        });
        console.log(result);
    }
}

new Application().init();
new Test().listProducts();
