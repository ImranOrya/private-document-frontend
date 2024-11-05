import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Building } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DateObject } from "react-multi-date-picker";
import StatusTab from "./tabs/status/status-tab";
import { useReport } from "@/context/ReportContext";
import { ReportTabType } from "@/lib/types";
import TypeTab from "./tabs/type/type-tab";
import UrgencyTab from "./tabs/urgency/urgency-tab";
import SourceTab from "./tabs/source/source-tab";
import DurationTab from "./tabs/duration/duration-tab";
import RefferTab from "./tabs/reffer/reffer-tab";
export default function ReportTabs() {
  const { report, setReport } = useReport();

  const { t, i18n } = useTranslation();
  const direction = i18n.dir();

  const [dates, setDates] = useState<DateObject[]>([]);

  let dateOnComplete = (selectedDates: DateObject[]) => {
    setDates(selectedDates);
  };
  const setActiveTab = (tab: ReportTabType) => {
    setReport({
      ...report,
      header: {
        showType: tab == "Type",
        showStatus: tab == "Status",
        showUrgency: tab == "Urgency",
        showSource: tab == "Source",
        showDuration: tab == "Duration",
        showReffer: tab == "Reffer",
      },
      activeTab: tab,
    });
  };
  return (
    <Tabs
      dir={direction}
      defaultValue={report.activeTab}
      className="flex flex-col items-center"
      onValueChange={(value: any) => setActiveTab(value)}
    >
      <TabsList className="!p-0 h-fit bg-card mt-2 overflow-x-auto overflow-y-hidden justify-start border border-primary/10 dark:border-primary/20">
        <TabsTrigger
          value="Type"
          className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
        >
          <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
          {t("Type")}
        </TabsTrigger>
        <TabsTrigger
          value="Status"
          className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
        >
          <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
          {t("Status")}
        </TabsTrigger>
        <TabsTrigger
          value="Urgency"
          className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
        >
          <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
          {t("Urgency")}
        </TabsTrigger>
        <TabsTrigger
          value="Source"
          className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
        >
          <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
          {t("Source")}
        </TabsTrigger>
        <TabsTrigger
          value="Reffer"
          className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
        >
          <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
          {t("Reffer")}
        </TabsTrigger>
        <TabsTrigger
          value="Duration"
          className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
        >
          <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
          {t("Duration")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Status" className="w-full px-4 pt-8">
        <StatusTab />
      </TabsContent>
      <TabsContent value="Source" className="w-full px-4 pt-8">
        <SourceTab />
      </TabsContent>
      <TabsContent value="Urgency" className="w-full px-4 pt-8">
        <UrgencyTab />
      </TabsContent>
      <TabsContent value="Type" className="w-full px-4 pt-8">
        <TypeTab />
      </TabsContent>
      <TabsContent value="Reffer" className="w-full px-4 pt-8">
        <RefferTab />
      </TabsContent>
      <TabsContent value="Duration" className="w-full px-4 pt-8">
        <DurationTab />
      </TabsContent>
    </Tabs>
  );
}
