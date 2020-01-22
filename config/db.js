const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Model
const userSchema = mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    }
});
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);


// Product Model
global.Product = mongoose.model("Product", {
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    title: String,
    miniDescription: String,
    description: String,
    price: Number,
    sale: Number,
    photo: String
});

// Category Model
global.Category = mongoose.model("Category", {
    title: String
});