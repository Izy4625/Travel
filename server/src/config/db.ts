import mongoose from 'mongoose';
import { SettingsModel } from '../models/settingsModel';
import { createSeed } from '../services/setting.service';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI! ||"mongodb+srv://yisroelgold3:KDl5gerHaHl1DowG@izyg.7q5uv.mongodb.net/tunnels123" );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        const settings = await SettingsModel.findOne();
        if(!settings){
            await createSeed();
            console.log('[Settings] seed created')
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
