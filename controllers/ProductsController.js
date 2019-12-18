const list = (req, res) => {
    Product.find({}, (err, products) => {
        res.json(products);
    });
};

const listByCategory = (req, res) => {
    Product.find({category: req.params.categoryId}, (err, products) => {
        res.json(products);
    });
};

const getOne = (req, res) => {
    Product.findById(req.params.productId, (err, products) => {
        res.json(products);
    });
};

const create = (req, res) => {
    const u = new Product({
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
    });
    u.save().then(() => {
        res.json({
            message: "Product created"
        });
    });
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.productId}, (err) => {
        res.json({
            message: "Product Deleted"
        });
    });
};

const update = (req, res) => {
    Product.updateOne({_id: req.params.productId}, {
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
    }, (err) => {
        res.json({
            message: "Product Updated"
        });
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
