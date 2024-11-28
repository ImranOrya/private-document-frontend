import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { PAGINATION_COUNT } from "@/lib/constants";
import useUserDB from "@/lib/indexeddb/useUserDB";
import { useNavigate, useSearchParams } from "react-router";
import axiosClient from "@/lib/axois-client";
import { DateObject } from "react-multi-date-picker";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import CustomInput from "@/components/custom-ui/input/CustomInput";
import SecondaryButton from "@/components/custom-ui/button/SecondaryButton";
import {
  LogFilter,
  LogSearch,
  LogSort,
  Order,
  PaginationLogData,
} from "@/lib/types";
export interface Log {
  created_at: string;
  error_message: string;
  username: string;
  user_id: number | string;
  ip_address: string;
  method: string;
  exception_type: string;
  error_code: string;
  uri: string;
}

export interface LogsResponse {
  status: string;
  logs: Log[];
}
import LogDropdown from "./log-dropdown";
import { Logs } from "@/database/tables";

const LogsPage: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch logs when the component mounts
    fetchLogs();
  }, []);

  // Function to fetch logs from the API
  const fetchLogs = async () => {
    try {
      const response = await axiosClient.get<LogsResponse>("database-logs");
      if (response.data.status === "success") {
        setLogs(response.data.logs);
      } else {
        setErrorMessage("No logs found.");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch logs.");
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  const { getAppCache } = useUserDB();
  const [searchParams] = useSearchParams();
  // Accessing individual search filters
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const order = searchParams.get("order");
  const [filters, setFilters] = useState<LogFilter>({
    sort: sort == null ? "username" : (sort as LogSort),
    order: order == null ? "asc" : (order as Order),
    search: {
      column: search == null ? "username" : (search as LogSearch),
      value: "",
    },
    date: [],
  });

  const loadList = async (count: number, dataFilters: LogFilter, page = 1) => {
    try {
      if (loading) return;
      setLoading(true);
      // 1. Organize date
      let dates: {
        startDate: Date | null;
        endDate: Date | null;
      };
      if (filters.date.length === 1) {
        // set start date
        dates = {
          startDate: filters.date[0].toDate(),
          endDate: null,
        };
      } else if (filters.date.length === 2) {
        // set dates
        dates = {
          startDate: filters.date[0].toDate(),
          endDate: filters.date[1].toDate(),
        };
      } else {
        // Set null
        dates = {
          startDate: null,
          endDate: null,
        };
      }
      // 2. Send data
      const response = await axiosClient.get(`logs/${page}`, {
        params: {
          per_page: count,
          filters: {
            sort: dataFilters.sort,
            order: dataFilters.order,
            search: {
              column: dataFilters.search.column,
              value: dataFilters.search.value,
            },
            date: dates,
          },
        },
      });
      const fetch = response.data.log.data as Logs[];
      const lastPage = response.data.log.last_page;
      const totalItems = response.data.log.total;
      const perPage = response.data.log.per_page;
      const currentPage = response.data.log.current_page;
      setLog({
        filterList: {
          data: fetch,
          lastPage: lastPage,
          totalItems: totalItems,
          perPage: perPage,
          currentPage: currentPage,
        },
        unFilterList: {
          data: fetch,
          lastPage: lastPage,
          totalItems: totalItems,
          perPage: perPage,
          currentPage: currentPage,
        },
      });
    } catch (error: any) {
      toast({
        toastType: "ERROR",
        title: "Error!",
        description: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };
  const initialize = async (dataFilters: LogFilter) => {
    const count = await getAppCache(PAGINATION_COUNT);
    loadList(count ? count.value : 10, dataFilters);
  };
  useEffect(() => {
    initialize(filters);
  }, [filters.order, filters.sort]);
  const [log, setLog] = useState<{
    filterList: PaginationLogData;
    unFilterList: PaginationLogData;
  }>({
    filterList: {
      data: [],
      lastPage: 1,
      totalItems: 0,
      perPage: 0,
      currentPage: 0,
    },
    unFilterList: {
      data: [],
      lastPage: 1,
      totalItems: 0,
      perPage: 0,
      currentPage: 0,
    },
  });

  return (
    <>
      <div className="flex flex-row w-full rounded-md ltr:mb-1 bg-card  py-4">
        <div className="className=flex flex-row w-2/6 rounded-md ltr:ml-4 ltr:mr-4">
          <CustomInput
            size_="lg"
            placeholder={`${t(filters.search.column)}...`}
            parentClassName="sm:flex-1 col-span-3"
            type="text"
            ref={searchRef}
            startContent={
              <Search className="size-[18px] mx-auto rtl:mr-[4px] text-primary pointer-events-none  " />
            }
          />
          <CustomInput
            size_="lg"
            placeholder={`${t(filters.search.column)}...`}
            parentClassName="sm:flex-1 col-span-3"
            type="text"
            ref={searchRef}
            startContent={
              <Search className="size-[18px] mx-auto rtl:mr-[4px] text-primary pointer-events-none  " />
            }
          />
        </div>
        <div className="ltr:mt-6 ltr:ml-10">
          <SecondaryButton
            onClick={async () => {
              if (searchRef.current != undefined) {
                const newfilter = {
                  ...filters,
                  search: {
                    column: filters.search.column,
                    value: searchRef.current.value,
                  },
                };

                await initialize(newfilter);
                setFilters(newfilter);
              }
            }}
            className="ltr:mt-5"
          >
            {t("search")}
          </SecondaryButton>
        </div>

        <LogDropdown
          filters={filters}
          sortOnComplete={async (filterName: LogSort) => {
            if (filterName != filters.sort) {
              setFilters({
                ...filters,
                sort: filterName,
              });
              const queryParams = new URLSearchParams();
              queryParams.set("search", filters.search.column);
              queryParams.set("sort", filterName);
              queryParams.set("order", filters.order);
              navigate(`/logs?${queryParams.toString()}`);
              // sortList
              const item = {
                data: log.filterList.data,
                lastPage: log.unFilterList.lastPage,
                totalItems: log.unFilterList.totalItems,
                perPage: log.unFilterList.perPage,
                currentPage: log.unFilterList.currentPage,
              };
              setLog({
                ...log,
                filterList: item,
              });
            }
          }}
          searchOnComplete={async (filterName: LogSearch) => {
            const search = filters.search;
            setFilters({
              ...filters,
              search: { ...search, column: filterName },
            });
          }}
          orderOnComplete={async (filterName: Order) => {
            if (filterName != filters.order) {
              setFilters({
                ...filters,
                order: filterName,
              });
              const queryParams = new URLSearchParams();
              queryParams.set("sort", filters.sort);
              queryParams.set("order", filterName);
              navigate(`/logs?${queryParams.toString()}`, {
                replace: true,
              });
            }
          }}
          dateOnComplete={(selectedDates: DateObject[]) => {
            setFilters({
              ...filters,
              date: selectedDates,
            });
          }}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {errorMessage ? (
            <div className="text-red-500 text-center">{errorMessage}</div>
          ) : (
            <div className="space-y-4">
              {logs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{item.created_at}</span>
                    <span className="bg-primary text-primary-foreground rounded-md p-1">
                      {item.method}
                    </span>
                  </div>
                  <h3 className="text-xl text-wrap font-semibold text-red-500">
                    {item.error_message}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    <strong>User ID:</strong> {item.user_id}
                  </p>
                  <p className="text-gray-600">
                    <strong>Username:</strong> {item.username}
                  </p>
                  <p className="text-gray-600">
                    <strong>Error Code:</strong> {item.error_code}
                  </p>
                  <p className="text-gray-600">
                    <strong>Exception Type:</strong> {item.exception_type}
                  </p>
                  <p className="text-gray-600">
                    <strong>IP Address:</strong> {item.ip_address}
                  </p>
                  <p className="text-gray-600 break-words">
                    <strong>URI:</strong> {item.uri}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LogsPage;
