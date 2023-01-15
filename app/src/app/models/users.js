const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String,
    password: String,
}, {

    timestamps: true,
});

UsersSchema.plugin(mongoose_delete,
    { deletedAt: true },
    { overrideMethods: 'all' }
);

UsersSchema.plugin(mongoose_delete,
    { overrideMethods: 'all' }
);

const UsersModel = mongoose.model('user', UsersSchema);

module.exports = UsersModel;

