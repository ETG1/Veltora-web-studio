import ShapeGrid from '@/components/ui/ShapeGrid'

export default function ServiceBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* One shared ShapeGrid for all children */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ShapeGrid
          speed={0.2}
          squareSize={30}
          direction="diagonal"
          borderColor="rgba(232, 160, 32, 0.38)"
          hoverFillColor="rgba(232, 160, 32, 0.45)"
          shape="hexagon"
          hoverTrailAmount={0}
        />
      </div>

      {/* Content stacked above the grid */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
