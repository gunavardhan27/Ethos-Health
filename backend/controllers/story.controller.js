import Story from "../models/story.model.js"

export const uploadStory = async(req,res)=>{
    try{
    const data = req.body
    const newStory = await Story(data)
    if(newStory){
        await newStory.save()
        res.status(200).json({
            'newData':newStory})
    }
}  catch(err){
    console.log('Error in the upload ',err.message)
    res.status(500)
    throw new Error('Error while uploading')
}
}
export const getStories = async(req,res)=>{
    try{
    const data = await Story.find({})
    if(data){
        res.status(200).json(
        {'data':data})
    }
}   catch(err){
    console.log('Error while retrieving stories',err.message)
   throw new Error('Invalid')
}
}