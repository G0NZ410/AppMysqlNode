const controller = {};

controller.list = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if(err){
                next(err);
            }
            console.log(customers);
            res.render('customers', {
                data: customers
            })
        })
    })
};

module.exports = controller;