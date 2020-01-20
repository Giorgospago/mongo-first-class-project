const list = async (req, res) => {
    const products = await Product
        .find({})
        .populate("category")
        .exec();
    res.json(products);
};

const listByCategory = async (req, res) => {
    const products = await Product
        .find({category: req.params.categoryId})
        .exec();
    res.json(products);
};

const getOne = async (req, res) => {
    const product = await Product
        .findById(req.params.productId)
        .populate("category")
        .exec();

    res.json(product);
};

const create = async (req, res) => {
    const u = new Product({
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
    });
    await u.save();
    res.json({
        message: "Product created"
    });
};

const deleteProduct = async (req, res) => {
    await Product
    .deleteOne({_id: req.params.productId})
    .exec();
    
    res.json({message: "Product Deleted"});
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
        photo: req.body.photo
    }).exec();

    res.json({
        message: "Product Updated"
    });
};

module.exports = {
    list,
    listByCategory,
    getOne,
    create,
    deleteProduct,
    update
};
