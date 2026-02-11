import { cn } from "@/shared/lib/utils";
import { Bell, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const navItems = {
  home: { to: "/", label: "홈" },
  myPage: { to: "/myPage", label: "마이 페이지" },
};

export function HeaderNav() {
  const handleAlarm = async () => {
    // Todo: 알림 기능 구현 예정
    toast.info("미구현 기능입니다.");
  };

  const iconButtonClass =
    "flex h-9 w-9 items-center justify-center rounded-full cursor-pointer " +
    "bg-primary/10 text-accent/50 shadow " +
    "hover:bg-primary/50 hover:text-accent " +
    "hover:scale-105 active:scale-95 transition-all";

  return (
    <nav className="w-full flex justify-between items-center">
      <div className="flex items-center gap-4">
        <NavLink
          key={navItems.home.to}
          to={navItems.home.to}
          className="text-lg font-bold text-primary"
        >
          KanKan
        </NavLink>
        <span className="hidden sm:inline text-muted-foreground font-medium text-sm cursor-default">
          자소서부터 면접까지, 칸칸이 쌓이는 나만의 취준 기록장
        </span>
      </div>

      <div className="flex gap-6">
        <button type="button" onClick={handleAlarm} className={iconButtonClass} aria-label="알림">
          <Bell size={18} />
        </button>
        <NavLink
          to={navItems.myPage.to}
          className={({ isActive }) =>
            cn(iconButtonClass, isActive ? "bg-primary/50 text-accent" : "text-accent/50")
          }
          aria-label="마이 페이지"
        >
          <UserRound size={18} />
        </NavLink>
      </div>
    </nav>
  );
}
