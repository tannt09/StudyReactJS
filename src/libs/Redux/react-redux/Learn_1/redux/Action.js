import { ActionType } from '@/constant'

// Complete User Action
export const completeSuccessAction = (id) => ({
  type: ActionType.COMPLETE_USER_SUCCESS_ACTION,
  payload: id,
})

// Delete User Action
export const deleteSuccessAction = (id) => ({
  type: ActionType.DELETE_USER_SUCCESS_ACTION,
  payload: id,
})

// Edit User Action
export const editSuccessAction = (name) => ({
  type: ActionType.EDIT_USER_SUCCESS_ACTION,
  payload: name,
})

// Set Error and Pending
export const errorAction = (error) => ({
  type: ActionType.ERROR_ACTION,
  payload: error,
})

export const pendingAction = () => ({
  type: ActionType.PENDING_ACTION,
})
