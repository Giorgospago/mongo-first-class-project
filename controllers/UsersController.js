const list = (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
};

const getOne = (req, res) => {
    User.findById(req.params.userId, (err, users) => {
        res.json(users);
    });
};

const create = (req, res) => {
    const u = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    u
        .save()
        .then(() => {
            res.json({
                message: "User created"
            });
        })
        .catch((err) => {
            res.json({
                message: "User Not created",
                error: err
            });
        });
};

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.userId}, (err) => {
        res.json({
            message: "User Deleted"
        });
    });
};

const update = (req, res) => {
    User.updateOne({_id: req.params.userId}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }, (err) => {
        res.json({
            message: "User Updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteUser,
    update
};
