import mongoose from "mongoose";
// import { loadType } from "mongoose-currency";


const Schema = mongoose.Schema;
// loadType(mongoose);



const ProductSchema = new Schema (
  {
    price: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    expense: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    transactions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction"
    }],
  },
  { timestamps: true, toJSON: {getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;