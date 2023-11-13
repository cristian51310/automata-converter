import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-12">
        <div className="flex items-center gap-3">
          <p className="text-md font-semibold">Automata Converter</p>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}