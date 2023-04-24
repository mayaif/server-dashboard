import mongoose from "mongoose";

const Schema = mongoose.Schema;

const USD_TO_CENTS = 100;

const TransactionSchema = new Schema (
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      get: (v) => (v / USD_TO_CENTS).toFixed(2),
      set: (v) => Math.round(parseFloat(v) * USD_TO_CENTS)
    },
    productIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }],
  },
  { timestamps: true, toJSON: {getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;






