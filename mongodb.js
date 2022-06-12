const { config } = require("./global");

require("dotenv").config();
const mongoDbUrl = config.db.url;
const mongoClient = require("mongodb").MongoClient;
let mongodb;
function connect(callback) {
  mongoClient.connect(
    mongoDbUrl,
    // { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
      console.log("Db connected");
      mongodb = db;
      callback();
    }
  );
}
function get(collectionName) {
  return mongodb.db("fooddine").collection(collectionName);
}
async function collectionExists(name, cb) {
  let result = await mongodb.db("fooddine").listCollections().toArray();
  // console.log(result, "resultt")
  return result.some((val) => {
    if (val.name === name) {
      return true;
    }
  });
}

function getOtherDb(dbName, collectionName) {
  return mongodb.db(dbName).collection(collectionName);
}

function close() {
  mongodb.close();
}

module.exports = {
  connect,
  get,
  close,
  getOtherDb,
  collectionExists,
};

[
  {
    item: "Dosa",
    price: 35,
    type: "breakfast",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Idli",
    price: 20,
    type: "breakfast",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Appam",
    price: 30,
    type: "breakfast",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Curred Rice",
    price: 40,
    type: "lunch",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Parota",
    price: 15,
    type: "lunch",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Vegitable Bath",
    price: 60,
    type: "lunch",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Rice and Sambhar",
    price: 45,
    type: "dinner",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Rice and rasam",
    price: 45,
    type: "dinner",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Rice and Dal",
    price: 50,
    type: "dinner",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Tea",
    price: 15,
    type: "hot bevarages",
    count: 0,
  },
  {
    item: "Coffee",
    price: 15,
    type: "hot bevarages",
    count: 0,
  },
  {
    item: "Milk",
    price: 15,
    type: "hot bevarages",
    count: 0,
  },
  {
    item: "Cold Coffee",
    price: 45,
    type: "cold bevarages",
    count: 0,
  },
  {
    item: "Cold Badham Milk",
    price: 45,
    type: "cold bevarages",
    count: 0,
  },
  {
    item: "Butter Milk",
    price: 50,
    type: "cold bevarages",
    count: 0,
  },
  {
    item: "Mirchy Bajji",
    price: 45,
    type: "snacks",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Mysuru Bonda",
    price: 45,
    type: "snacks",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Vada",
    price: 50,
    type: "snacks",
    cuisine: "south",
    count: 0,
  },
  {
    item: "Chapati",
    price: 35,
    type: "breakfast",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Parota",
    price: 20,
    type: "breakfast",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Puri",
    price: 30,
    type: "breakfast",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Chole Bhature",
    price: 80,
    type: "lunch",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Butter Chicken",
    price: 100,
    type: "lunch",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Butter Kulcha",
    price: 70,
    type: "lunch",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Chiken Byriyani",
    price: 45,
    type: "dinner",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Dum Byriyani",
    price: 45,
    type: "dinner",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Byriyani Rice",
    price: 50,
    type: "dinner",
    cuisine: "north",
    count: 0,
  },

  {
    item: "Moong Dal Kachori",
    price: 45,
    type: "snacks",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Kathi Kebab Roll",
    price: 45,
    type: "snacks",
    cuisine: "north",
    count: 0,
  },
  {
    item: "Paneer Pakora",
    price: 50,
    type: "snacks",
    cuisine: "north",
    count: 0,
  },

  {
    item: "Dim Sums",
    price: 80,
    type: "lunch",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Quick Noodles",
    price: 100,
    type: "lunch",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Szechwan Chilli Chicken",
    price: 150,
    type: "lunch",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Szechwan Rice",
    price: 110,
    type: "dinner",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Fried Rice",
    price: 80,
    type: "dinner",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Choclate",
    price: 15,
    type: "hot bevarages",
    count: 0,
  },
  {
    item: "Filter Coffee",
    price: 15,
    type: "hot bevarages",
    count: 0,
  },
  {
    item: "Hot pops",
    price: 45,
    type: "snacks",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Spring Rolls",
    price: 45,
    type: "snacks",
    cuisine: "chinese",
    count: 0,
  },
  {
    item: "Aloo tiki",
    price: 50,
    type: "snacks",
    cuisine: "chinese",
    count: 0,
  },
];
