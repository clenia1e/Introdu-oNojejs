import Sequelize from "sequelize";
import User from '../app/models/User';
import DatabaseConfig from '../config/database';



const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);


        models
            .map(models => models.init(this.connection))
            .map(models => models.associate && model.associate(this.connection.models))
    }
}





export default new Database();