import { configureStore } from '@reduxjs/toolkit'
import pastereducer from './redux/paste.Slice'
export const store = configureStore({
  reducer: {
    paste:pastereducer},
})