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
  
  // Check if we're on any auction-related page
  const isAuctionSection = pathname.startsWith('/dashboard/auction');
  
  // Determine which auction sub-item is active
  const isListingsActive = pathname === '/dashboard/auction/listings';
  const isBidOfferActive = pathname === '/dashboard/auction/bid-offer';
  
  // Check if we're on any tools-related page
  const isToolsSection = pathname.startsWith('/dashboard/tools');
  
  // Determine which tools sub-item is active
  const isPaperworkActive = pathname === '/dashboard/tools';
  const isCustomActive = pathname === '/dashboard/tools/custom';
  
  // Check if we're on any reports-related page
  const isReportsSection = pathname.startsWith('/dashboard/reports');
  
  // Determine which reports sub-item is active
  const isInventoryHistoryActive = pathname === '/dashboard/reports';
  const isInvoiceHistoryActive = pathname === '/dashboard/reports/invoice-history';
  const isLeadsInfoActive = pathname === '/dashboard/reports/leads-info';
  const isCFSAnalyticsActive = pathname === '/dashboard/reports/cfs-analytics';
  
  // Check if we're on any support-related page
  const isSupportSection = pathname.startsWith('/dashboard/support');
  
  // Determine which support sub-item is active
  const isPackageActive = pathname === '/dashboard/support';
  const isContactUsActive = pathname === '/dashboard/support/contact-us';
  const isHelpCenterActive = pathname === '/dashboard/support/help-center';
  
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
              (item.title === "Leads & Contacts" && isLeadsContactsSection) ||
              (item.title === "Auction" && isAuctionSection) ||
              (item.title === "Tools" && isToolsSection) ||
              (item.title === "Reports" && isReportsSection) ||
              (item.title === "Support" && isSupportSection);
            
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

                {/* Render submenu for Auction when it's active */}
                {item.title === "Auction" && isAuctionSection && (
                  <div className="ml-6 ">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isListingsActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/auction/listings">
                            Listings
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isBidOfferActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/auction/bid-offer">
                            Bid Offer
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </div>
                )}

                {/* Render submenu for Tools when it's active */}
                {item.title === "Tools" && isToolsSection && (
                  <div className="ml-6 ">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isPaperworkActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/tools">
                            Paperwork
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isCustomActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/tools/custom">
                            Custom
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </div>
                )}

                {/* Render submenu for Reports when it's active */}
                {item.title === "Reports" && isReportsSection && (
                  <div className="ml-6 ">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isInventoryHistoryActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/reports">
                            Inventory History
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isInvoiceHistoryActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/reports/invoice-history">
                            Invoice History
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isLeadsInfoActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/reports/leads-info">
                            Leads Info
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isCFSAnalyticsActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/reports/cfs-analytics">
                            CFS Analytics
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </div>
                )}

                {/* Render submenu for Support when it's active */}
                {item.title === "Support" && isSupportSection && (
                  <div className="ml-6 ">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isPackageActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/support">
                            Package
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isContactUsActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/support/contact-us">
                            Contact US
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          className={cn(
                            "text-sm py-6 opacity-55",
                            isHelpCenterActive && "bg-[#FFF4A3] text-accent-foreground font-medium"
                          )}
                        >
                          <Link href="/dashboard/support/help-center">
                            Help Center
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