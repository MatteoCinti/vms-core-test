import { GetValuationResponse } from '@barnebys/vms-client-sdk-node/dist/api/valuation/valuation.model'
import { ObjectId } from 'bson'

export type VmsValuation = GetValuationResponse & { refId: string; requester: string }
export type WrappedVmsValuation = Omit<VmsValuation, 'id'> & { id: ObjectId }
