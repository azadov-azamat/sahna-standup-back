'use strict'
const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate({Category}){
            Product.belongsTo(Category, {foreignKey: "category_id"})
        }
    }
    Product.init({
        name_uz: DataTypes.STRING,
        name_ru: DataTypes.STRING,
        price: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Product",
        underscored: true
    });
    return Product
}