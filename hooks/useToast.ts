"use client"

// Inspired by react-hot-toast
import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & { id: string; title?: React.ReactNode }
type State = { toasts: ToasterToast[] }
type Action =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string }

const listeners: Array<(state: State) => void> = []
let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

const toast = (props: ToastProps) => {
  const id = Math.random().toString(36).slice(2, 10)
  const t: ToasterToast = { id, ...props }
  dispatch({ type: "ADD_TOAST", toast: t })
  setTimeout(() => dispatch({ type: "REMOVE_TOAST", toastId: id }), TOAST_REMOVE_DELAY)
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST": {
      const toasts = [action.toast, ...state.toasts]
      if (toasts.length > TOAST_LIMIT) toasts.splice(TOAST_LIMIT)
      return { toasts }
    }
    case "DISMISS_TOAST": {
      return {
        toasts: state.toasts.map((t) =>
          action.toastId && t.id === action.toastId
            ? { ...t, open: false }
            : t
        ),
      }
    }
    case "REMOVE_TOAST": {
      return {
        toasts: state.toasts.filter(
          (t) => !(action.toastId && t.id === action.toastId)
        ),
      }
    }
    default:
      return state
  }
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const idx = listeners.indexOf(setState)
      if (idx > -1) listeners.splice(idx, 1)
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}
