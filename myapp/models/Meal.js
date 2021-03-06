// Meal.js

var mysql = require('../mysql');

var Meal = {

    viewAllMeals: function(callback){
        return mysql.query('call viewAllMeals();', callback);
    },
    viewMealByID: function(id, callback){
        return mysql.query('call viewMealByID(?);',[id], callback);
    },
    addMeal: function(meal, callback){
        return mysql.query('call addMeal(?,?,?,?);', [meal.name, meal.type, meal.time, meal.recipe], callback);
    },
    deleteMealByID: function(id, callback){
        return mysql.query('call deleteMealByID(?);', [id], callback);
    },
    updateMealByID: function(id, meal, callback){
        return mysql.query('call updateMealByID(?,?,?,?,?);', [id, meal.name, meal.type, meal.time, meal.recipe], callback);
    },

    viewAllMealIngredients: function(id, callback){
        return mysql.query('call viewAllMealIngredients(?)', [id], callback);
    },
    addMealIngredient: function(id, ingredient_connection, callback){
        return mysql.query('call addMealIngredient(?,?,?)', [id, ingredient_connection.id, ingredient_connection.amount], callback);
    },
    deleteMealIngredient: function(id, id2, callback){
        return mysql.query('call deleteMealIngredient(?,?)', [id, id2], callback);
    },
    updateIngredientAmount: function(id, ingredient_connection, callback){
        return mysql.query('call updateIngredientAmount(?,?,?)', [id, ingredient_connection.id, ingredient_connection.amount], callback);
    }
}

module.exports = Meal;