import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { DashboardTab } from "./ui/DashboardTab";
import { CalendarTab } from "./ui/CalendarTab";
import CreateScheduleDialog from "@/features/schedule/ui/CreateScheduleDialog";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="w-full flex items-center justify-between">
          <div className="inline-flex h-9 items-center justify-center rounded-lg p-1 text-muted-foreground bg-muted shadow">
            <TabsTrigger
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
              value="dashboard"
            >
              대시보드
            </TabsTrigger>

            <TabsTrigger
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
              value="calendar"
            >
              캘린더
            </TabsTrigger>
          </div>

          <CreateScheduleDialog />
        </TabsList>

        <TabsContent value="dashboard">
          <DashboardTab />
        </TabsContent>

        <TabsContent value="calendar">
          <CalendarTab />
        </TabsContent>
      </Tabs>
    </section>
  );
}
