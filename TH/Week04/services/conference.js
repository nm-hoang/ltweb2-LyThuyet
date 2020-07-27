const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./user');
const Model = Sequelize.Model;
class Conference extends Model{
    static async findAllConference(){
        return Conference.findAll();
    }
    static async findConferenceByIdUser(userId){
      return Conference.findAll({
        where:{
            userId,
        }
      });
      }
    static async updateConference(id,name,detail,timeStarted){
      const conf = Conference.getConferenceById(id);
      conf.name = name;
      conf.detail = detail;
      conf.timeStarted = timeStarted;
      console.log(conf.name, name);
      (await conf).update;
    }
    static async getConferenceById(id){
      return Conference.findOne({
          where:{
            id,
          }
      });
    }
}

Conference.init({
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    detail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      timeStarted: {
        type: Sequelize.DATE,
      },
   
  }, {
    sequelize: db,
    modelName: 'conference',
    // options
  });

User.hasMany(Conference);
Conference.belongsTo(User);

module.exports = Conference;

