const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    model: String,
    price: String,
    image: String
}, {

    timestamps: true,
});

ProductsSchema.plugin(mongoose_delete,
    { deletedAt: true },
    { overrideMethods: 'all' }
);

ProductsSchema.plugin(mongoose_delete,
    { overrideMethods: 'all' }
);

const ProductsModel = mongoose.model('product', ProductsSchema);

module.exports = ProductsModel;

