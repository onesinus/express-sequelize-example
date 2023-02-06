'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model     = Sequelize.Model;
  const Op        = Sequelize.Op;

  class Student extends Model {
    static getData() {
      return this.findAll();
    }

    static saveData(objData) {
      const ObjDataSave = {
        first_name: objData.firstname,
        last_name: objData.lastname,
        email: objData.email
      };

      return this.build(ObjDataSave).save();
    }

    static getDataEdit(id) {
      return this.findByPk(id)
    }

    static updateData(objDataUpdated, idUpdate) {
      const dataUpdate = {
        first_name: objDataUpdated.firstname,
        last_name: objDataUpdated.lastname,
        email: objDataUpdated.email
      };

      return this.update(dataUpdate, {
        where: {
          id: {
            [Op.eq]: idUpdate
          }
        }
      });
    }

    static deleteData(id) {
      return this.destroy({
        where: {
          id: id
        }
      });
    }
    
  }

  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {sequelize});


  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};