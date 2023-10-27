import { useSelector } from 'react-redux'

export const useStoreTodo = () => {
  return useSelector((state) => state.data)
}
