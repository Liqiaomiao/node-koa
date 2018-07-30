/**
 * Created by Liqiaomiao on 2018/7/30.
 */
const mongoose = require("mongoose"); //引入mongoose
const Schema = mongoose.Schema;       //声明 schema
const categorySub = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_ID:{type:String},
    COMMENTS:{type:String},
    SORT:{type:Number}
});
mongoose.model('CategorySub',categorySub);
