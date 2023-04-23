import mongoose from "mongoose";
// import { loadType } from "mongoose-currency";


// const Schema = mongoose.Schema;
// loadType(mongoose);

// const daySchema = new Schema(
//   {
//     date: String,
//     revenue: {
//       type: mongoose.Types.Currency,
//       currency: "USD",
//       get: (v) => v/100
//     },
//     expenses: {
//       type: mongoose.Types.Currency,
//       currency: "USD",
//       get: (v) => v/100
//     },
//   },
//   { toJSON: {getters: true } }
// )

const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    expenses: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    }
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    expenses: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    operationalExpenses: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    nonOperationalExpenses: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
  },
  { toJSON: {getters: true } }
)



const KPISchema = new Schema (
  {
    totalProfit: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    totalRevenue: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    totalExpenses: {
      type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
    },
    expensesByCategory: {
      type: Object,
      of: {
        type: Number,
      set: (v) => v*100,
      get: (v) => (v/100).toFixed(2),
      required: true
      }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema]
  },
  { timestamps: true, toJSON: {getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;