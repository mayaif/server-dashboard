import mongoose from "mongoose";

const Schema = mongoose.Schema;

const USD_TO_CENTS = 100;

const ProductSchema = new Schema (
  {
    price: {
      type: Number,
      required: true,
      get: (v) => (v / USD_TO_CENTS).toFixed(2),
      set: (v) => Math.round(parseFloat(v) * USD_TO_CENTS)
    },
    expense: {
      type: Number,
      required: true,
      get: (v) => (v / USD_TO_CENTS).toFixed(2),
      set: (v) => Math.round(parseFloat(v) * USD_TO_CENTS)
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


