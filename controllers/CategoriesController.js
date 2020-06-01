const list = async (req, res) => {
    const categories = await Category.find({}).exec();
    return res.json({
        success: true,
        categories: categories
    });
};

const getProductsByCategory = async (req, res) => {
    const category = await Category.findById(req.params.categoryId).exec();
    const products = await Product.find({category: req.params.categoryId}).exec();
    return res.json({
        success: true,
        category: category,
        products: products
    });
};

const getOne = (req, res) => {
    Category.findById(req.params.categoryId, null,{lean: true},(err, category) => {
        res.json(category);
    });
};

const create = (req, res) => {
    const u = new Category({
        title: req.body.title
    });
    u.save().then(() => {
        res.json({
            message: "Category created"
        });
    });
};

const deleteCategory = (req, res) => {
    Category.deleteOne({_id: req.params.categoryId}, (err) => {
        res.json({
            message: "Category Deleted"
        });
    });
};

const update = (req, res) => {
    Category.updateOne({_id: req.params.categoryId}, {
        title: req.body.title
    }, (err) => {
        res.json({
            message: "Category Updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteCategory,
    update,
    getProductsByCategory
};
