import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  documentTypeData,
  documentStatusData,
  documentDurationData,
  documentUrgencyData,
  documentRefferData,
  documentSourceData,
  ReportType,
} from "../../dummy-data";
import { useState } from "react";
import Card from "@/components/custom-ui/card/Card";
import { Building, Printer } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

function TypeTab() {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  const [types, setTypes] = useState(documentTypeData);
  const [state, setState] = useState("");
  interface Item {
    id: number;
    label: string;
  }

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const handleCheckboxChange = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id)); // Uncheck
    } else {
      setCheckedItems([...checkedItems, id]); // Check
    }
  };
  return (
    <div className="flex flex-col gap-y-12">
      <button className=" flex justify-end mx-10 -my-10 cursor-pointer p-3">
        <Printer />
      </button>
      <div className="p-5 flex justify-center">
        <div className=" flex space-x-4">
          {" "}
          {/* Changed to flex with space between items */}
          {types.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={checkedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
              />
              <label
                htmlFor={`checkbox-${item.id}`}
                className="ml-2 text-gray-700"
              >
                {item.name}
              </label>
            </div>
          ))}
          {state == "Ahkams" && (
            <Table
              key={state}
              className="border-collapse bg-card rounded-sm border"
            >
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary [&>th]:text-primary-foreground ltr:[&>th]:border-r rtl:[&>th]:border-l [&>th]:border-secondary/20">
                  <TableHead className=" text-center">no</TableHead>
                  <TableHead className="">Status</TableHead>
                  <TableHead className="">Number</TableHead>
                  <TableHead className="">Date</TableHead>
                  <TableHead className=" ">Recieve Date</TableHead>
                  <TableHead className=" ">Reciever</TableHead>
                  <TableHead className=" ">Urgency</TableHead>
                  <TableHead className="">Source</TableHead>
                  <TableHead className=" ">Reffer</TableHead>
                  <TableHead className="text-right">Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&>th]:text-primary-foreground ltr:[&>th]:border-r rtl:[&>th]:border-l [&>th]:border-secondary/20">
                {documentStatusData.map((type, index: number) => (
                  <>
                    <TableRow
                      className={`${
                        index % 2 == 0
                          ? "bg-transparent] hover:bg-transparent"
                          : " bg-primary/15 hover:bg-primary/15"
                      }`}
                    >
                      <TableCell
                        rowSpan={2}
                        className="border-t ltr:border-r rtl:border-l font-bold text-center"
                        key={type.id}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        className="font-medium border-b ltr:border-r rtl:border-l border-t"
                        key={type.id}
                      >
                        {type.name}
                      </TableCell>

                      <TableCell className="ltr:border-r rtl:border-l border-b border-t">
                        2333
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        2024/22/22
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        2024/22/33
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l border-b border-t">
                        Hameed
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        Urgent
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        Reyasatulwazara
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l border-b border-t">
                        ReyasatDafter
                      </TableCell>
                      <TableCell className=" border-b border-t">
                        2days
                      </TableCell>
                    </TableRow>
                    <TableRow
                      className={`${
                        index % 2 == 0
                          ? "bg-transparent] hover:bg-transparent"
                          : " bg-primary/15 hover:bg-primary/15"
                      }`}
                    >
                      <TableCell className="font-bold">Refered</TableCell>
                      <TableCell colSpan={8}>1. Muqam, 2. HR</TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
              <TableFooter className=" bg-transparent">
                <TableRow className="border-t hover:bg-transparent">
                  <TableCell className="font-boldltr:border-r rtl:border-l border-t">
                    Total
                  </TableCell>
                  <TableCell className="border-t" colSpan={9}>
                    30 Maktubs, 43 Istalaams, 24 orders
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </div>
      </div>
      {/* <Tabs
        className="flex flex-col items-center"
        onValueChange={(value: string) => {
          setState(value);
        }}
        dir={direction}
      >
        <TabsList className="!p-0 h-fit bg-card mt-2 overflow-x-auto overflow-y-hidden justify-start border border-primary/10 dark:border-primary/20">
          {types.map((item: ReportType) => (
            <TabsTrigger
              value={item.name}
              key={item.name}
              className="gap-x-1 rtl:text-2xl-rtl ltr:text-xl-ltr data-[state=active]:bg-primary data-[state=active]:text-tertiary"
            >
              <Building className="size-[16px] ltr:mr-1 rtl:ml-1" />
              {t(item.name)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={state} className="w-full px-4 pt-8">
          {state == "Ahkams" && (
            <Table
              key={state}
              className="border-collapse bg-card rounded-sm border"
            >
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary [&>th]:text-primary-foreground ltr:[&>th]:border-r rtl:[&>th]:border-l [&>th]:border-secondary/20">
                  <TableHead className=" text-center">no</TableHead>
                  <TableHead className="">Status</TableHead>
                  <TableHead className="">Number</TableHead>
                  <TableHead className="">Date</TableHead>
                  <TableHead className=" ">Recieve Date</TableHead>
                  <TableHead className=" ">Reciever</TableHead>
                  <TableHead className=" ">Urgency</TableHead>
                  <TableHead className="">Source</TableHead>
                  <TableHead className=" ">Reffer</TableHead>
                  <TableHead className="text-right">Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&>th]:text-primary-foreground ltr:[&>th]:border-r rtl:[&>th]:border-l [&>th]:border-secondary/20">
                {documentStatusData.map((type, index: number) => (
                  <>
                    <TableRow
                      className={`${
                        index % 2 == 0
                          ? "bg-transparent] hover:bg-transparent"
                          : " bg-primary/15 hover:bg-primary/15"
                      }`}
                    >
                      <TableCell
                        rowSpan={2}
                        className="border-t ltr:border-r rtl:border-l font-bold text-center"
                        key={type.id}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        className="font-medium border-b ltr:border-r rtl:border-l border-t"
                        key={type.id}
                      >
                        {type.name}
                      </TableCell>

                      <TableCell className="ltr:border-r rtl:border-l border-b border-t">
                        2333
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        2024/22/22
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        2024/22/33
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l border-b border-t">
                        Hameed
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        Urgent
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l  border-b border-t">
                        Reyasatulwazara
                      </TableCell>
                      <TableCell className="ltr:border-r rtl:border-l border-b border-t">
                        ReyasatDafter
                      </TableCell>
                      <TableCell className=" border-b border-t">
                        2days
                      </TableCell>
                    </TableRow>
                    <TableRow
                      className={`${
                        index % 2 == 0
                          ? "bg-transparent] hover:bg-transparent"
                          : " bg-primary/15 hover:bg-primary/15"
                      }`}
                    >
                      <TableCell className="font-bold">Refered</TableCell>
                      <TableCell colSpan={8}>1. Muqam, 2. HR</TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
              <TableFooter className=" bg-transparent">
                <TableRow className="border-t hover:bg-transparent">
                  <TableCell className="font-boldltr:border-r rtl:border-l border-t">
                    Total
                  </TableCell>
                  <TableCell className="border-t" colSpan={9}>
                    30 Maktubs, 43 Istalaams, 24 orders
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </TabsContent>
      </Tabs> */}
    </div>
  );
}

export default TypeTab;
