//@ts-nocheck
import { Profile } from "./models/Profile";
import { Repository } from "./Repository";
import { Application } from "./Applicaton";

class Test {
    profileRepository: Repository<Profile>;

    constructor() {
        this.profileRepository = new Repository<Profile>(typeof Profile);
    }

    async listProducts() {
        const result = await this.profileRepository.find({
            select: ['user.id', 'user.name', 'user.username', 'profile.picture_path'],
            relations: ['profile'],
        });
        console.log(result);
    }
}

new Application().init();
new Test().listProducts();
