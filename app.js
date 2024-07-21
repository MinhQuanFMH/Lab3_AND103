//tham chieu thu vien
const express=require('express');
const mongoose=require('mongoose');
const sinhVienRoute=require('./routes/sinhvienRoute');
const bodyParser = require('body-parser');

//tao doi tuong express
const app=express();

//ket noi voi mongodb
mongoose.connect('mongodb+srv://quanvmph44046:HoangDuyen010802%40%5E.%5E%40MTBC@cluster0.ektarrq.mongodb.net/AND103',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("ket noi thanh cong voi mongodb");
}).catch((err)=>{
    console.error("Loi ket noi: ",err);
});
//
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

//su dung route
app.use('/sinhvien',sinhVienRoute);
app.use('/',sinhVienRoute);

//su dung EJS lam view engine
app.set('view engine','ejs');

//khoi dong server
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("server dang chay o cong 3000");
});