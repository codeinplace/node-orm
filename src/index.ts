//@ts-nocheck
import { Profile } from './models_test/Profile';
import { Repository } from './Repository';
import { Application } from './Applicaton';

class Test {
    profileRepository: Repository<Profile>;

    constructor() {
        this.profileRepository = new Repository<Profile>(Profile);
    }

    async listProducts() {
        const result = await this.profileRepository.find({
            select: ['profile.id:prof', 'user:myUser', 'created_at'],
            relations: ['user'],
        });
        console.log(result);
    }
}

new Test().listProducts();

// new Application().init().then(() => {
//     new Test().listProducts();
// });
