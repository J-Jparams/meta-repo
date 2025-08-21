
"use client";

import { useForm, type UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, type ZodType } from "zod";

// Keep field types = z.input<TSchema>; omit resolver from opts so TS doesn’t fight us.
type FormOpts<TSchema extends ZodType<any, any, any>> =
  Omit<UseFormProps<z.input<TSchema>>, "resolver">;

export function useZodForm<TSchema extends ZodType<any, any, any>>(
  schema: TSchema,
  opts?: FormOpts<TSchema>
) {
  return useForm<z.input<TSchema>>({
    ...opts,
    // RHF expects Resolver<input, any, input>
    // zodResolver returns Resolver<input, any, output>
    // Runtime is correct; TS can’t prove it → assert once here.
    resolver: zodResolver(schema) as any,
  });
}
