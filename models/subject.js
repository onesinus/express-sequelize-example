'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model     = Sequelize.Model;
  const Op        = Sequelize.Op;

  class Subject extends Model {
    static getData() {
      return this.findAll();
    }

    static saveData(objData) {
      const ObjDataSave = {
        subject_name: objData.subjectname
      };

      return this.build(ObjDataSave).save();
    }

    static getDataEdit(id) {
      return this.findByPk(id)
    }

    static updateData(objDataUpdated, idUpdate) {
      const dataUpdate = {
        subject_name: objDataUpdated.subjectname
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

  Subject.init({
    subject_name: DataTypes.STRING
  }, {sequelize})

  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};