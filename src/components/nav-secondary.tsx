"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon | React.ReactElement
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname()

  // Check if we're on any settings-related page
  const isSettingsSection = pathname.startsWith('/dashboard/settings')

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const IconComponent = item.icon as LucideIcon
            const isActive = pathname === item.url || 
                           (item.title === "Settings" && isSettingsSection)
            
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild
                  className={cn(
                    isActive && item.title === "Settings" && "bg-[#FFE135] text-accent-foreground font-medium"
                  )}
                >
                  <a href={item.url}>
                    {React.isValidElement(item.icon) ? (
                      item.icon
                    ) : (
                      <IconComponent />
                    )}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}