"use client"

import * as React from "react"
import { useFormContext } from "react-hook-form"
import { FormFieldContext, FormItemContext } from "@/components/ui/form"

/**
 * Returns IDs and field‐state for a FormField.
 * Must be used within <FormField>…</FormField>.
 */
export default function useFormField() {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)
  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
