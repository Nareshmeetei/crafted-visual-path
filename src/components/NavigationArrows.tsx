import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip"

interface NavigationArrowsProps {
  onPrevious: () => void
  onNext: () => void
  className?: string
}

export function NavigationArrows({ onPrevious, onNext, className }: NavigationArrowsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onPrevious}
              className="w-10 h-10 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
          </TooltipTrigger>
          <TooltipContent 
            side="bottom" 
            className="bg-white text-gray-900 border border-gray-200 shadow-sm"
          >
            Previous
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </TooltipTrigger>
          <TooltipContent 
            side="bottom" 
            className="bg-white text-gray-900 border border-gray-200 shadow-sm"
          >
            Next
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
} 