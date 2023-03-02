const {MongoClient} = rerquire("monogodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db; //private db variable

module.exports = {
    connectToServer: function (callback){
        client.connect(function (err,db){
            //Verify we got a good "db" object
            if(db)
            {
                _db = db.db("employees"); // Will need to be change
                console.log("Successfully connected to MongoDB."); 
            }
            return callback(err);

        });
    },
    getDB: function (){
        return _db;
    },
};
