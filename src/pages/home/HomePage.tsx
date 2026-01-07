import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { DashboardTab } from "./ui/DashboardTab";
import { CalendarTab } from "./ui/CalendarTab";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="shadow">
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
