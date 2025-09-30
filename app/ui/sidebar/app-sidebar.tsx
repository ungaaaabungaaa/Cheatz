import * as React from "react";
import { SearchForm } from "@/components/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarOptInForm } from "./sidebar-opt-in-form"
import { NavMain } from "./collapsible"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Briefcase,
  FileText,
  GraduationCap,
  Heart,
  Eye,
  Ban,
  Gamepad2,
  FolderOpen,
  HatGlasses,
  HandHelping,
  Gem
} from "lucide-react"

// Navigation data for the sidebar
const data = {
  navMain: [

    {
      title: "Cheat Sheet's",
      url: "/Cheats",
      icon: Ban,
      items: [
        {
          title: "Cheat Sheet's",
          url: "/leaked",
        },
        {
          title: "Model Question's",
          url: "/leaked",
        },
        {
          title: "important Question's",
          url: "/leaked",
        },
        {
          title: "Teacher Question's",
          url: "/leaked",
        },

      ],
    },
    {
      title: "No Job?",
      url: "/jobs",
      icon: Briefcase,
      items: [
        {
          title: "Walk In Drive's",
          url: "/jobs",
        },
        {
          title: "Job Agency",
          url: "/jobs",
        },
      ],
    },
    {
      title: "Help With Assignement's",
      url: "/assignments",
      icon: FileText,
      items: [
        {
          title: "Assignment Shop's",
          url: "/assignments",
        },
        {
          title: "Student's",
          url: "/assignments",
        },
      ],
    },
    {
      title: "One Click Scholarship",
      url: "/scholarship",
      icon: GraduationCap,
      items: [
        {
          title: "One Click Apply",
          url: "/scholarship",
        },
        {
          title: "CyberCenter's",
          url: "/scholarship",
        },
      ],
    },
   
    {
      title: "Buy Project's",
      url: "/projects",
      icon: FolderOpen,
      items: [
        {
          title: "Buy Project's",
          url: "/projects",
        },
        {
          title: "Get It From Student's",
          url: "/projects",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
