import { Link } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/src/components/ui/tooltip"
import { CirclePlus, Home, LogIn, LogOut, Pencil, Settings, TableProperties, User, } from "lucide-react"

export const SideNav = () => {
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            to="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/board/table"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <TableProperties className="h-5 w-5" />
                <span className="sr-only">Table</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Table</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/board/table/add-item"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <CirclePlus className="h-5 w-5" />
                <span className="sr-only">AddItem</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">AddItem</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/board/table/edit-item"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Pencil className="h-5 w-5" />
                <span className="sr-only">EditItem</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">EditItem</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          {/* 로그인 후 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/logout"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">LogOut</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">LogOut</TooltipContent>
          </Tooltip>
          {/* 로그인 전 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/user/login"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LogIn className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Login</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/user/signup"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Signup</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Signup</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/user/settings"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  )
}