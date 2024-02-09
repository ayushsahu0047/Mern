import mongoose  from "mongoose";

const postSchema = mongoose.Schema({
    tittle:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    imgUrl:{
    
            type:String,
            require:true,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    rating:[{type:Number}],
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    Comments:[{type:String}]
});

export default Post = mongoose.Schema   ("user",postSchema)