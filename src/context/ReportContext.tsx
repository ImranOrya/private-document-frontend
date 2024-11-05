import React from "react";
import { createContext, useContext, useState } from "react";
import { DateObject } from "react-multi-date-picker";

const defaultValue: Report = {
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
};
interface Report {
  header: {
    showType: boolean;
    showStatus: boolean;
    showUrgency: boolean;
    showSource: boolean;
    showReffer: boolean;
    showDuration: boolean;
  };
  activeTab: string;
  dates: DateObject[];
}

type ReportProviderProps = {
  children: React.ReactNode;
};

type ReportProviderState = {
  report: Report;
  setReport: (report: Report) => void;
};

const initialState: ReportProviderState = {
  report: defaultValue,
  setReport: () => null,
};

const ReportProviderContext = createContext<ReportProviderState>(initialState);

export function ReportProvider({ children, ...props }: ReportProviderProps) {
  const [report, setReport] = useState<Report>(defaultValue);

  return (
    <ReportProviderContext.Provider
      {...props}
      value={{
        report: report,
        setReport: setReport,
      }}
    >
      {children}
    </ReportProviderContext.Provider>
  );
}

export const useReport = () => {
  const context = useContext(ReportProviderContext);

  if (context === undefined)
    throw new Error("useReport must be used within a ReportProvider");

  return context;
};
