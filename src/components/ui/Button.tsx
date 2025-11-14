import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
          variant === "default" && "bg-sky-500 text-white hover:bg-sky-600",
          variant === "ghost" &&
            "bg-transparent text-slate-700 hover:bg-slate-100",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
