'use strict'
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    class Category extends Model {
        static associate({Product}) {
        Category.hasMany(Product, {foreignKey: "category_id"})
        }
    }
    Category.init({
        name_uz: DataTypes.STRING,
        name_ru: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Category',
        underscored: true
    });
    return Category;
}