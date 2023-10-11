import ActionTypes from '@/constant/ActionType'
import { createAction } from '@reduxjs/toolkit'

export const incrementAction = createAction(ActionTypes.INCREMENT)
