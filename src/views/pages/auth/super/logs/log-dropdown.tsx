import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DateObject } from "react-multi-date-picker";
import { FilterItem } from "@/components/custom-ui/filter/FilterItem";
import { LogFilter, LogSearch, LogSort, Order } from "@/lib/types";

export interface LogFilterProps {
  sortOnComplete: (itemName: LogSort) => void;
  searchOnComplete: (itemName: LogSearch) => void;
  orderOnComplete: (itemName: Order) => void;
  dateOnComplete: (selectedDates: DateObject[]) => void;
  filters: LogFilter;
}
export default function LogDropdown(props: LogFilterProps) {
  const {
    sortOnComplete,
    searchOnComplete,
    orderOnComplete,
    dateOnComplete,
    filters,
  } = props;
  const [searchBy, setSearchBy] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<string | null>(null);
  const { t } = useTranslation();
  const handleSort = (itemName: string) => {
    sortOnComplete(itemName as LogSort);
  };
  const handleSearch = (itemName: string) => {
    searchOnComplete(itemName as LogSearch);
  };
  const handleOrder = (itemName: string) => {
    orderOnComplete(itemName as Order);
  };
  const defaultGroupText = "rtl:[&>*]:text-lg-rtl ltr:[&>*]:text-xl-ltr";

  const defaultText = "rtl:text-xl-rtl ltr:text-xl-ltr";
  // State to manage card visibility

  return (
    <div className="flex flex-col items-center ltr:mt-3 ltr:ml-72">
      <section className="px-2 pt-2">
        <div>
          <Select onValueChange={setSearchBy}>
            <SelectTrigger className={`min-w-[180px] ${defaultText}`}>
              <SelectValue placeholder={t("Search")} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup className={defaultGroupText}>
                <FilterItem
                  selected={filters.search.column}
                  headerName={"Search by"}
                  items={[
                    {
                      name: "userid",
                      translate: t("userid"),
                      onClick: handleSearch,
                    },
                    {
                      name: "username",
                      translate: t("username"),
                      onClick: handleSearch,
                    },
                    {
                      name: "ipaddress",
                      translate: t("ipaddress"),
                      onClick: handleSearch,
                    },
                    {
                      name: "errorcode",
                      translate: t("errorcode"),
                      onClick: handleSearch,
                    },
                  ]}
                />
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
      <section className="px-2 pt-2">
        <div>
          <Select onValueChange={setFilterBy}>
            <SelectTrigger className={`min-w-[180px] ${defaultText}`}>
              <SelectValue placeholder={t("Filter")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className={defaultGroupText}>
                <FilterItem
                  selected={filters.sort}
                  headerName={"Filter by"}
                  items={[
                    {
                      name: "userid",
                      translate: t("userid"),
                      onClick: handleSort,
                    },
                    {
                      name: "username",
                      translate: t("username"),
                      onClick: handleSort,
                    },
                    {
                      name: "ipaddress",
                      translate: t("ipaddress"),
                      onClick: handleSort,
                    },
                    {
                      name: "errorcode",
                      translate: t("errorcode"),
                      onClick: handleSort,
                    },
                    {
                      name: "exceptiontype",
                      translate: t("exceptiontype"),
                      onClick: handleSort,
                    },
                    {
                      name: "url",
                      translate: t("url"),
                      onClick: handleSort,
                    },
                  ]}
                />
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
    </div>
  );
}
