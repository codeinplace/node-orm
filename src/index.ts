//@ts-nocheck
import { User } from "./models/User";
import { Repository } from "./Repository";
import { Application } from "./Applicaton";
import { Profile } from "./models/Profile";

class Test {
    profileRepository: Repository<Profile>;

    constructor() {
        this.profileRepository = new Repository<Profile>(Profile);
    }

    async listProducts() {
        const result = await this.profileRepository.find({
            select: ['job_area', 'picture_path'],
            relations: ['user'],
        });
        console.log(result);
    }
}

new Application().init();
new Test().listProducts();
