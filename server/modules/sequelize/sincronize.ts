import {User} from '../admin/model';

export default () => {
    User.sync({ force: true });
}