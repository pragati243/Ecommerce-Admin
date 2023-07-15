"use client";
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@radix-ui/react-separator"
import { Plus } from "lucide-react"
import { useParams,useRouter } from "next/navigation";
import { ColorColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ColorClientProps {
    data: ColorColumn[]
}

export const BillboardClient: React.FC<ColorClientProps> = ({
    data
}) => {
    const params = useParams();
    const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading 
                    title={`Colors (${data.length})`}
                    description="Manage colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey = "label" columns={columns} data={data}/>
            <Heading title="API" description="API Calls for colors" />
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId" />
        </>
    )
}