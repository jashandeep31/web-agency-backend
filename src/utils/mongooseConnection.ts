import mongoose from "mongoose";

const URI: string = process.env.MONGOOSE_URI || "mongodb://localhost:27017";

export default async function mongooseConnection() {
    mongoose
        .connect(URI + "/web-agency")
        .then((e) => {
            console.log("success");
        })
        .catch((e) => {
            console.log(e);
            console.log("failed");
        });
}
