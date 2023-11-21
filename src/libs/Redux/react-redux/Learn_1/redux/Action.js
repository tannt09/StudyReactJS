import { ActionType } from '@/constant'

// Complete User Action
export const completeSuccessAction = (id) => ({
  type: ActionType.COMPLETE_USER_SUCCESS_ACTION,
  payload: id,
})

export const completePendingAction = () => ({
  type: ActionType.COMPLETE_USER_PENDING_ACTION,
})

export const completeErrorAction = (error) => ({
  type: ActionType.COMPLETE_USER_ERROR_ACTION,
  payload: error,
})

// Delete User Action
export const deleteSuccessAction = (id) => ({
  type: ActionType.DELETE_USER_SUCCESS_ACTION,
  payload: id,
})

export const deletePendingAction = () => ({
  type: ActionType.DELETE_USER_PENDING_ACTION,
})

export const deleteErrorAction = (error) => ({
  type: ActionType.DELETE_USER_ERROR_ACTION,
  payload: error,
})

// Edit User Action
export const editSuccessAction = (name) => ({
  type: ActionType.EDIT_USER_SUCCESS_ACTION,
  payload: name,
})

export const editPendingAction = () => ({
  type: ActionType.EDIT_USER_PENDING_ACTION,
})
