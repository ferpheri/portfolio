import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 dark:focus:border-accent focus:border-indigo-700 font-light bg-indigo-200 dark:bg-primary px-4 py-5 text-base placeholder:text-black/80 dark:placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
