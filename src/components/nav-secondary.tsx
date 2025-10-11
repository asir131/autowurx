"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { LogoutModal } from "@/components/LogoutModal"

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
  const router = useRouter()
  const [showLogoutModal, setShowLogoutModal] = React.useState(false)

  // Check if we're on any settings-related page
  const isSettingsSection = pathname.startsWith('/dashboard/settings')

  const handleLogout = () => {
    // Add your logout logic here
    // For example:
    // - Clear authentication tokens
    // - Clear local storage
    // - Call logout API
    // - Redirect to login page
    
    console.log("Logging out...")
    // Example: router.push('/login')
    setShowLogoutModal(false)
  }

  const handleItemClick = (e: React.MouseEvent, item: typeof items[0]) => {
    if (item.title === "Log Out") {
      e.preventDefault()
      setShowLogoutModal(true)
    }
  }

  return (
    <>
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
                    <a 
                      href={item.url}
                      onClick={(e) => handleItemClick(e, item)}
                    >
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

      <LogoutModal 
        open={showLogoutModal}
        onOpenChange={setShowLogoutModal}
        onConfirm={handleLogout}
      />
    </>
  )
}