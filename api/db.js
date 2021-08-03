require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DataTypes } = require("sequelize")
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/merceria`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/src/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/src/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Bundle,Category,Image,Office,Order,Product,Review,Schedule,Stock,User,Wishlist,BuyHistory } = sequelize.models;

BuyHistory.belongsToMany(User,{through:"buyhistory_user"});
User.belongsTo(BuyHistory,{foreignKey:"user_id"});

BuyHistory.belongsToMany(Order,{through:"buyhistory_order"});
Order.belongsToMany(BuyHistory,{through:"buyhistory_order"});

const Bundle_Product = sequelize.define('Bundle_Product', {
  id: {type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  allowNull: false,
  primaryKey: true},
  quantity: DataTypes.INTEGER
});


Bundle.belongsToMany(Product,{ through: Bundle_Product });
Product.belongsToMany(Bundle,{ through: Bundle_Product });


const Category_Product = sequelize.define('Category_Product', {
  id: {type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  allowNull: false,
  primaryKey: true}
});


Category.belongsToMany(Product,{ through: Category_Product});
Product.belongsToMany(Category,{ through: Category_Product});

Product.hasMany(Image);
Image.belongsTo(Product);


const Order_Product = sequelize.define('Order_Product', {
  id: {type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true},
    quantity: DataTypes.INTEGER,
});


Product.belongsToMany(Order,{through: Order_Product});
Order.belongsToMany(Product,{through: Order_Product});

const Order_Schedule = sequelize.define('Order_Schedule', {
  id: {type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true},
});


Order.belongsToMany(Schedule, {through: Order_Schedule});
Schedule.belongsToMany(Order, {through: Order_Schedule});

Product.belongsToMany(Stock,{through:"product_stock"});
Stock.belongsTo(Product,{foreignKey:"product_id"})

Product.belongsToMany(Wishlist, {through:"product_wishlist"});
Wishlist.belongsTo(Product,{foreignKey:"product_id"})

User.hasOne(Wishlist);
Wishlist.belongsTo(User);

Wishlist.belongsToMany(Stock,{through:"wishlist_stock"});
Stock.belongsToMany(Wishlist,{through:"wishlist_stock"});

Office.belongsToMany(Stock,{through:"office_stock"});
Stock.belongsTo(Office,{foreignKey:"office_id"})

Office.belongsToMany(Schedule,{through:"office_schedule"});
Schedule.belongsTo(Office,{foreignKey:"office_id"})

User.belongsToMany(Order,{through:"user_order"});
Order.belongsTo(User,{foreignKey:"user_id"});

User.belongsToMany(Review,{through:"user_review"});
Review.belongsTo(User,{foreignKey:"reviewer_id"});

Order.belongsToMany(Review,{through:"order_review"});
Review.belongsTo(Order,{foreignKey:"order_id"})

User.belongsToMany(Schedule,{through:"user_schedule"});
Schedule.belongsTo(User,{foreignKey:"admin_id"})





module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
}


