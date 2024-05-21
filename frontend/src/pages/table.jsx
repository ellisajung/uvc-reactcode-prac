import { z } from "zod";

import Data from "@/src/components/table/data/tasks.json";
import { columns } from "@/src/components/table/columns";
import { DataTable } from "@/src/components/table/data-table";
import { UserNav } from "@/src/components/table/user-nav";
import { taskSchema } from "@/src/components/table/data/schema";

// Simulate a database read for tasks.
function getTasks() {
  const tasks = Data;

  return z.array(taskSchema).parse(tasks);
}

export default function Table() {
  const tasks = getTasks();

  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable
          data={tasks}
          columns={columns}
        />
      </div>
    </>
  );
}
