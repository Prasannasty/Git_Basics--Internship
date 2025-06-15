import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  role: string;
}

const employeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  role: { type: String, required: true }
});

export default mongoose.model<IEmployee>('Employee', employeeSchema);