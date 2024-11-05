import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  documentTypeData,
  ReportType,
  documentRefferData,
} from "../../dummy-data";
import { useState } from "react";
import Card from "@/components/custom-ui/card/Card";
import { Printer } from "lucide-react";

function StatusTab() {
  const [types, setTypes] = useState(documentRefferData);
  return (
    <div className="flex flex-col gap-y-12">
      <button className=" flex justify-end mx-10 -my-10 cursor-pointer p-3">
        <Printer />
      </button>
      {types.map((type: ReportType) => (
        <Card className="p-0" key={type.name}>
          {/* header */}
          <h1 className=" bg-tertiary text-secondary rounded-tr-md rounded-tl-md p-2 rtl:text-lg-rtl ltr:text-4xl-ltr font-semibold">
            {type.name}
          </h1>
          {/* body */}
          <Table className="border-collapse">
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Recieve Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Reciever</TableHead>
                <TableHead className="text-right">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentTypeData.map((type) => (
                <>
                  <TableRow>
                    <TableCell className="font-medium " key={type.id}>
                      {type.name}
                    </TableCell>

                    <TableCell>2333</TableCell>
                    <TableCell>2024/22/22</TableCell>
                    <TableCell>2024/22/33</TableCell>
                    <TableCell>Inprogress</TableCell>
                    <TableCell>urgent</TableCell>
                    <TableCell>Hameed</TableCell>
                    <TableCell>2days</TableCell>
                  </TableRow>
                  <TableRow className="!border-t-transparent !border-primary bg-primary/5">
                    <TableCell className="font-bold">Refered</TableCell>
                    <TableCell colSpan={8}>1. Muqam, 2. HR</TableCell>
                  </TableRow>
                </>
              ))}

              <TableRow className="w-full border-t border-gray-400 "></TableRow>

              <TableRow className=" !border-0 ">
                <TableCell className="font-bold !border-0">Refered</TableCell>
                <TableCell colSpan={8} className="!border-0">
                  1. Muqam, 2. HR
                </TableCell>
              </TableRow>

              <TableRow className="w-full border-t border-gray-400 ">
                <TableCell className="font-bold border-t  border-gray-400">
                  Total
                </TableCell>
                <TableCell
                  className="w-full border-t border-gray-400 "
                  colSpan={8}
                >
                  30 Maktubs, 43 Istalaams, 24 orders
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      ))}
    </div>
  );
}

export default StatusTab;
