import { WrappedVmsValuation } from '../lib/valuation/valuation.model'

declare global {
  namespace Express {
    interface Request {
      fetched: {
        manyValuations?: { valuations: WrappedVmsValuation[]; totalCount: number }
        valuation?: WrappedVmsValuation
      }
    }
  }
}
