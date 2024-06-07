import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-indigo-200 dark:bg-primary px-4 py-5 text-base dark:placeholder:text-white/60 placeholder:text-black/80 focus-visible:outline-none focus-visible:ring-1 dark:focus:ring-accent focus:ring-indigo-700 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
