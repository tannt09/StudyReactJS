import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = (action) => {
  const dispatch = useDispatch()
  return React.useMemo(
    () => bindActionCreators(action, dispatch),
    [action, dispatch],
  )
}
