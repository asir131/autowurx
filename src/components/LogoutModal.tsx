"use client"

import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface LogoutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function LogoutModal({ open, onOpenChange, onConfirm }: LogoutModalProps) {
  const router = useRouter()

  const handleConfirm = () => {
    onConfirm() // Call any logout logic (clearing auth, etc.)
    router.push("/") // Redirect to homepage
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-sm">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold">
            Logout
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Are You Sure You Want To Log Out ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-row gap-2 justify-end">
          <AlertDialogCancel className="mt-0 bg-white border-gray-300 hover:bg-gray-50">
            No
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleConfirm}
            className="bg-[#FFE135] text-black hover:bg-[#FFD700]"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}