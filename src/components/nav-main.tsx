"use client"

import React, { useState } from "react"
import Link from "next/link"
import { type LucideIcon } from "lucide-react"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
  pathname,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon | JSX.Element
  }[] 
  pathname: string
}) {
  console.log("pathname", pathname);
  
  // Check if we're on any inventory-related page
  const isInventorySection = pathname.startsWith('/dashboard/inventory');
  
  // Determine which inventory sub-item is active
  const isExistingInventoryActive = pathname === '/dashboard/inventory' || pathname === '/dashboard/inventory/existingInventory';
  const isSoldInventoryActive = pathname === '/dashboard/inventory/soldInventory';
  
  // Check if we're on any leads & contacts related page
  const isLeadsContactsSection = pathname.startsWith('/dashboard/leads&contacts');
  
  // Determine which leads & contacts sub-item is active
  const isLeadsActive = pathname === '/dashboard/leads&contacts' || pathname === '/dashboard/leads-contacts/leads';
  const isAllContactsActive = pathname === '/dashboard/leads&contacts/all-contacts';
  
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            {/* Add other content if needed */}
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url || 
              (item.title === "Inventory" && isInventorySection) ||
              (item.title === "Leads & Contacts" && isLeadsContactsSection);
            
            return (
              <React.Fragment key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    tooltip={item.title} 
                    asChild
                    className={cn(
                      isActive && "bg-[#FFE135] text-accent-foreground font-medium"
                    )}
                  >
                    <Link href={item.url} className="flex justify-between">
                      <div className="flex items-center gap-2">
                        {item.icon && 
                        (React.isValidElement(item.icon) ? (
                          item.icon
                        ) : (
                          React.createElement(item.icon as React.ElementType)
                        ))
                        }
                        <span>{item.title}</span> 
                      </div>
                      
                      {/* Conditionally render the arrows, except for 'Overview' */}
                      {item.title !== "Overview" && (
                        isActive ? <IoIosArrowUp /> : <IoIosArrowDown /> 
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Render submenu for Inventory when it's active */}
                {item.title === "Inventory" && isInventorySection && (
                  <div className="ml-6 ">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isExistingInventoryActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/inventory">
                            Existing Inventory
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isSoldInventoryActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/inventory/soldInventory">
                            Sold Inventory
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </div>
                )}

                {/* Render submenu for Leads & Contacts when it's active */}
                {item.title === "Leads & Contacts" && isLeadsContactsSection && (
                  <div className="ml-6 ">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isLeadsActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/leads&contacts">
                            Leads
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isAllContactsActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/leads&contacts/all-contacts">
                            All Contacts
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}