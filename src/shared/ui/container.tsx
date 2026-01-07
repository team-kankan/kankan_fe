import { cn } from "@/shared/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return <div className={cn("mx-auto w-full max-w-screen-xl px-6", className)}>{children}</div>;
}
