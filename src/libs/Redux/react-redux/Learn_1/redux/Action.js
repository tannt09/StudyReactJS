import { ActionType } from '@/constant'

export const completeAction = (id) => ({
  type: ActionType.COMPLETE_USER_ACTION,
  payload: id,
})

export const completePendingAction = () => ({
  type: ActionType.COMPLETE_USER_PENDING_ACTION,
})
