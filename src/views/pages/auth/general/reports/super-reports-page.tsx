import { ReportProvider } from "@/context/ReportContext";
import ReportTabs from "./report-tabs";
import ReportTabsHeader from "./report-tabs-header";

export default function SuperReportsPage() {
  return (
    <ReportProvider>
      <ReportTabsHeader />
      <ReportTabs />
    </ReportProvider>
  );
}
