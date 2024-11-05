import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import CustomMultiDatePicker from "@/components/custom-ui/DatePicker/CustomMultiDatePicker";

import {
  documentStatusData,
  documentTypeData,
  documentSourceData,
  documentUrgencyData,
  documentRefferData,
} from "./dummy-data";

import { DateObject } from "react-multi-date-picker";
import { useTranslation } from "react-i18next";
import { useReport } from "@/context/ReportContext";
import { Eraser } from "lucide-react";
import DropMenu from "./DropMenu";
import { useState } from "react";
export default function ReportTabsHeader() {
  const { report, setReport } = useReport();
  const { t } = useTranslation();
  const [key, setKey] = useState(0);
  const handleClearButton = () => {
    setReport({
      header: {
        showType: true,
        showStatus: false,
        showUrgency: false,
        showSource: false,
        showReffer: false,
        showDuration: false,
      },

      activeTab: "Type",
      dates: [],
    });
    setKey((prevKey) => prevKey + 1);
  };

  let dateOnComplete = (selectedDates: DateObject[]) => {
    setReport({
      ...report,
      dates: selectedDates,
    });
  };

  return (
    <Card className="ml-2 mr-2 py-12">
      <CardContent className="flex justify-between items-center gap-x-4">
        <div className="flex gap-x-4 items-baseline">
          <CustomMultiDatePicker
            key={key}
            value={report.dates}
            dateOnComplete={dateOnComplete}
          />
          {!report.header.showType && (
            <DropMenu label="Types" list={documentTypeData} />
          )}
          {!report.header.showStatus && (
            <DropMenu label="Status" list={documentStatusData} />
          )}
          {!report.header.showUrgency && (
            <DropMenu label="Urgency" list={documentUrgencyData} />
          )}
          {!report.header.showSource && (
            <DropMenu label="Source" list={documentSourceData} />
          )}
          {!report.header.showReffer && (
            <DropMenu label="Reffer" list={documentRefferData} />
          )}
          {!report.header.showDuration && (
            <DropMenu label="Duration" list={documentSourceData} />
          )}
        </div>
        <div className="ltr:border-l rtl:border-r ltr:pl-6 rtl:pr-6 flex flex-col gap-y-4">
          <Button onClick={handleClearButton} variant="outline">
            <Eraser />
            Clear
          </Button>
          <Button
            variant="outline"
            className="bg-primary text-white rtl:text-2xl-rtl ltr:text-lg-ltr"
          >
            {t("submit")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
