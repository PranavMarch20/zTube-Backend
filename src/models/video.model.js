import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: string,
        required: true,
    },
    thumbnail: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        default: "",
        required: true,
    },
    duration: {
        type: number,
        required: true,
    },
    views: {
        type: number,
        default: 0,
    },
    isPublished: {
        type: boolean,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true,
})

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);