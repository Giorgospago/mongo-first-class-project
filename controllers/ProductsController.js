const mongoose = require("mongoose");

const list = async (req, res) => {
    const products = await Product
        .find({})
        .populate("category")
        .exec();
    res.json({
        success: true,
        products: products
    });
};

const listCart = async (req, res) => {
    const products = await Product
        .find({_id: req.body.productIds}, "title price photo")
        .exec();
    res.json({
        success: true,
        products: products
    });
};

const listByCategory = async (req, res) => {
    const products = await Product
        .find({category: req.params.categoryId})
        .exec();
    res.json({
        success: true,
        products: products
    });
};

const getOne = async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.productId)) {
        const product = await Product
            .findById(req.params.productId)
            .populate("category")
            .exec();

        res.json({
            success: true,
            product: product
        });
    } else {
        res.json({
            success: false,
            message: "Product not found"
        });
    }
};

const create = async (req, res) => {
    const p = new Product({
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.file.filename
    });
    await p.save();

    await Mail.sendMail({
        from: "App-isteuto <test@develobird.gr>",
        to: "giorgospago23@gmail.com",
        subject: "New Product just created",
        html: "<h1>" + p.title + "</h1><h2>" + req.user.firstName + "</h2>"
    });

    res.json({
        success: true,
        message: "Product created"
    });
};

const deleteProduct = async (req, res) => {
    await Product
    .deleteOne({_id: req.params.productId})
    .exec();
    
    res.json({
        success: true,
        message: "Product Deleted"
    });
};

const update = async (req, res) => {
    await Product.updateOne({_id: req.params.productId}, 
    {
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo,
        gallery: req.body.gallery
    }).exec();

    await Mail.sendMail({
        from: "App-isteuto <test@develobird.gr>",
        to: "giorgospago23@gmail.com",
        subject: "Product just updated",
        html: `
            <img src="${req.body.photo}" height="150"/>
            <h1 style="color:#ff0000">${req.body.title}</h1>
            <h5>${req.body.miniDescription}</h5>
            <h2>${req.body.price}</h2>
        `
    }); 

    res.json({
        success: true,
        message: "Product Updated"
    });
};

module.exports = {
    list,
    listCart,
    listByCategory,
    getOne,
    create,
    deleteProduct,
    update
};
