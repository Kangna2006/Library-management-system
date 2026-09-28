import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://gitika01011981_db_user:IajGvCtjO7cxLaSk@ac-xjpeexe-shard-00-00.h97uwt1.mongodb.net:27017,ac-xjpeexe-shard-00-01.h97uwt1.mongodb.net:27017,ac-xjpeexe-shard-00-02.h97uwt1.mongodb.net:27017/Library?ssl=true&replicaSet=atlas-o01boz-shard-0&authSource=admin&appName=Cluster0"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database Error:", error);
  }
};