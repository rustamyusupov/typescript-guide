import { User } from './models/User';

const user = new User({ name: 'New Record', age: 0 });

user.save();
