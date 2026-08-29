interface ScallopDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

/**
 * A row of soft scalloped bumps — the site's recurring signature motif,
 * echoing a stitched hem or a string of clouds. Used to transition between
 * differently-colored sections instead of a hard edge.
 */
export function ScallopDivider({ color = "#ffffff", flip = false, className = "" }: ScallopDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-[36px] w-full sm:h-[52px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 
             C 25,45 75,45 100,0 
             C 125,45 175,45 200,0 
             C 225,45 275,45 300,0 
             C 325,45 375,45 400,0 
             C 425,45 475,45 500,0 
             C 525,45 575,45 600,0 
             C 625,45 675,45 700,0 
             C 725,45 775,45 800,0 
             C 825,45 875,45 900,0 
             C 925,45 975,45 1000,0 
             C 1025,45 1075,45 1100,0 
             C 1125,45 1175,45 1200,0 
             L1200,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
