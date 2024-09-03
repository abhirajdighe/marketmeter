const express= require("express")
const cors = require('cors');
const bodyParser = require('body-parser')
// const db = require('./models/index')

const{PORT} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index')


const setupAndStartServer = async()=>{
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes);
    
    app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter:true});
        // }

    });
}

setupAndStartServer();