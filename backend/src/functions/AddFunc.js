import BillModel from '../models/Bill'
import UserModel from '../models/User'
import ItemModel from '../models/Item'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

//helper functions
const appendProduct = (category, product) => {
    CategoryModel.find({name:category}, async function(err, obj){
        if(obj.length){
            console.log('This category has already been created. good!');
            obj[0].products = [...obj[0].products,product]
            await obj[0].save();
        }
        else{
            console.log('category does not exist.');
            const model = new CategoryModel({name:category}).save();
            model.products = [product];
            await model.save();
        }
    })
}

const AddUser = (User)=>{
    UserModel.find({lineId:User.lineId}, async function(err, obj){
        if(obj.length){
            console.log('This LineId has already registered.');
        }
        else{
            console.log('registering new user...');
            await new UserModel({
                name:       User.name,
                lineId:     User.lineId,
                address:    User.address,
                phoneNumber:User.phoneNumber,
            }).save();
        }
    })
}

const AddBillToUser = async(userLineId)=>{
    console.log('adding bill to user', userLineId)
    const bill = await new BillModel({
        userLineId: userLineId,
        billId:     '',
        items:      [],
        total:      0,
        package:    '',
        payment:    '',
        address:    ''
    });
  
    const id = userLineId+"_"+JSON.stringify(bill._id.getTimestamp()).replace(/"/g, '')
    bill.billId = id

    bill.save();
}

const AddCategory = (Category)=>{
    console.log(Category);
    CategoryModel.find({name:Category.cat_name}, async function(err, obj){
        if(obj.length){
            console.log('This category has already been created');
        }
        else{
            console.log('creating new category...');
            await new CategoryModel({name:Category.cat_name, deadline:Category.deadLine,products:[]}).save();
        }
    })
}

const AddProductToCategory = (Product)=>{
    ProductModel.find({name:Product.name, category:Product.category}, async function(err, obj){
        if(obj.length){
            console.log('This product is already in the category.');
        }
        else{
            console.log('creating new product...',Product);
            await new ProductModel(Product).save();
            appendProduct(Product.category, Product.name);
        }
    })
}
const AddItemToBill = (item, BillId) => {

}

export {AddUser ,AddBillToUser, AddCategory, AddProductToCategory, AddItemToBill}