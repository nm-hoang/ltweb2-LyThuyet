
// const attendlist = [
//     {id:1, name: 'minhhoang', email:'minhhoang@gmail.com', phonenumber : '012345678', status : true },
//    // {id: 2,email: '1760070', displayName:'Minh Hoang',password: '$2b$10$t7MhTIi5wWoSrV/nFkvX9O50RP5T4P8vVEiPfiAST0SYxvduXqEeW'},
// ];
const Sequelize = require('sequelize');
const db = require('./db');
const Conference = require('./conference');
const datenow  = new Date().toISOString().slice(0, 19).replace('T', ' ');
const Model = Sequelize.Model;
class Attend extends Model{
    static async findAllAttend(){
        return Attend.findAll();
    }
    static async add(name,email,phone,idConference)
   {
       return Attend.create({name,email,phone,attendStatus: false,datenow,datenow,idConference});
   }
}

Attend.init({
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    attendStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
  
      },
  }, {
    sequelize: db,
    modelName: 'attend',
    // options
  });

  Conference.hasMany(Attend);
  Attend.belongsTo(Conference);

module.exports = Attend;