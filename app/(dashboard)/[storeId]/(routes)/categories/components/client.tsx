"use client";

import { useParams,useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./column";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";



interface CategoriesClientProps {
    data: CategoryColumn[];
}

export const CategoriesClient: React.FC<CategoriesClientProps> =({
    data
}) => {
    const params = useParams();;
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
            <Heading title={`Categories (${data.length})`} description="Manage categories for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="Api calls for Categories"/>
            <Separator />
            <ApiList entityName="categories" entityIdName="categoryId" />
        </>
    )
}