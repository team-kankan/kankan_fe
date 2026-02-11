import Button from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

export default function CreateScheduleDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size="sm">
          + 일정 추가
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-130">
        <DialogHeader>
          <DialogTitle>일정 추가</DialogTitle>
        </DialogHeader>

        <div className="py-4 text-sm text-muted-foreground">일정 추가 폼</div>
      </DialogContent>
    </Dialog>
  );
}
