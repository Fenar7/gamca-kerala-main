import { connectToDB } from '@/utils/database';
import User from '@/models/usersinfo';


export const POST = async(request) => {
    try{
        await connectToDB()

        const allusers = await User.find({})

        console.log(allusers)

        return new Response(JSON.stringify(allusers),{
            status:200
        })
    }catch(error){
        return new Response("Failed to fetch the data", {status: 500})
    }
}