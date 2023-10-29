import { ActionType } from '@/constant'

export const completeAction = (todo) => ({
  type: ActionType.COMPLETE_USER_ACTION,
  payload: todo,
})
