import { Schema, model, models, Document } from 'mongoose';

export interface IBasicInfo extends Document {
    fullName: string;
    description: string;
    yearOfExpirence: string;
    noOfProjects: string;
    noOfClients: string;
    user: Schema.Types.ObjectId;
    createdOn: Date;
}

const BasicInfoSchema = new Schema({
    fullName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    yearOfExpirence: { type: String, required: true },
    noOfProjects: { type: String, required: true },
    noOfClients: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: { type: Date, default: Date.now },
});

const BasicInfo = models.BasicInfo || model('BasicInfo', BasicInfoSchema);

export default BasicInfo;