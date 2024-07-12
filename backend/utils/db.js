import mongoose from 'mongoose'


export const connectDB = async ()=>{
    try {
        const res =  await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB Successfully!')
    } catch (error) {
        console.error(error,'ERROR')
    }
}