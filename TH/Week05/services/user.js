const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const db = require('./db');
const datenow  = new Date().toISOString().slice(0, 19).replace('T', ' ');
const Model = Sequelize.Model;
class User extends Model{
   
    static verifyPassword(password,passwordHash){
        return bcrypt.compareSync(password,passwordHash);
    }
    static hashPassword(password){
        return bcrypt.hashSync(password, 10);
    
    }
   
  static  async findUserById(id){
    return User.findByPk(id);
}
static async findUserByEmail(email){
    return User.findOne({
        where: {
            email,
        }
    });
 }
  static async add(name,email,phone,password){

       return User.create({name, email, phone,password,datenow,datenow});
    }
}

User.init({
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
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      }
  }, {
    sequelize: db,
    modelName: 'user',
    // options
  });



module.exports = User;

// const users = [
//     {id: 1,username: 'minhhoang@gmail.com',password: '$2b$10$iyQPcmp7hlYKQEm72px.QON3Tfy2xtvOkl2cfnsqHe.uNpYlJSVWK'},
//     {id: 2, username: 'admin', password:'$2b$10$R9FGvY2xaVWR4.ln/zesJe8dietqaebOoK.9Ex0oP/UImqnDnTS/i'},
// ];

//$2a$10$kQv0ROK59uFT8wJAxLXy2.DV1ChVG.sQ5dLLXwqkgSPM5cSYhBa76
