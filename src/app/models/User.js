import { Schema, models, model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    name: { type: String, require: true, unique: false },
    email: { type: String, require: true, unique: true },
    password: {
        type: String,
        require: true,
        minlength: 5,
        validate: {
            validator: (val) => val.length >= 5,
            message: "Password must be at least 5 characters long",
        },
    },
}, { timestamps: true });

UserSchema.post('validate', function (user) {
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
})

export const User = models?.User || model("User", UserSchema)