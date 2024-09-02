import mongoose from "mongoose";
const storySchema = new mongoose.Schema({
    startingPoint:{
        required:true,
        type: String
    },
    challenges:{
        required:true,
        type: String
    },
    turningPoint:{
        required:true,
        type: String
    },
    past:{
        required:true,
        type: String
    },
    present:{
        required:true,
        type: String
    },
    message:{
        required:true,
        type: String
    }

})
const Story = new mongoose.model('Story',storySchema)
export default Story