import mongoose from "mongoose";

const likeSchema = mongoose.Schema({

});

const Like = mongoose.model('Like', likeSchema)

export default Like