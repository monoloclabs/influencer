import { forwardRef, type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string };

/** Friendly round-headed assistant bot: round head, dot eyes, smile, antenna. */
export const RoundBot = forwardRef<SVGSVGElement, Props>(function RoundBot({ size = 24, strokeWidth = 2, ...rest }, ref) {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M12 6.5V4" />
      <circle cx="12" cy="2.8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="7.5" />
      <circle cx="9.2" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9.6 16.4c1.3 1.1 3.5 1.1 4.8 0" />
    </svg>
  );
});
