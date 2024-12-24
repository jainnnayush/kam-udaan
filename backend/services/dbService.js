const sequelize = require('../config/db.js');

const dbConnect = async()=>{
    try {
        await sequelize.authenticate();
        console.log("db connected");
    } catch (error) {
        console.log('Error in connecting to db',error);
    }
};

const syncDatabase = async () => {
    try {
      await sequelize.sync({ force: false });  // `force: false` ensures that existing tables are not dropped
      console.log('Database sync completed successfully');
    } catch (error) {
      console.error('Error syncing the database:', error);
    }
};

module.exports = { dbConnect, syncDatabase };