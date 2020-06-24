global.mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");
const mongooseIntl = require('mongoose-intl');
const mongoosastic = require('mongoosastic');

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
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    role: {
        type: String,
        required: true,
        default: "client",
        enum: ["client", "admin", "superUser"]
    }
}, {
    timestamps: true
});
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);


// Product Model
const productSchema = mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    title: String,
    miniDescription: String,
    description: String,
    price: Number,
    sale: Number,
    photo: String,
    gallery: [String],
    visionData: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
});

global.Product = mongoose.model("Product", productSchema);

// Category Model
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        intl: true,
        unique: false,
        es_type: "nested"
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
categorySchema.plugin(mongooseIntl, {languages: global.languages, defaultLanguage: global.defaultLanguage});
categorySchema.plugin(mongoosastic, {
    host: "elasticsearch",
    port: 9200
});
global.Category = mongoose.model("Category", categorySchema);
