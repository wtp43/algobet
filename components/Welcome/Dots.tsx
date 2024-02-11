export interface DotsProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
  radius?: number;
}

export function Dots({ size = 285, radius = 2.5, x, y, ...others }: DotsProps) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 285 285"
      width={size}
      height={size}
      x={x}
      y={y}
      {...others}
    >
      {[...Array(x)].map((_, i) =>
        [...Array(y)].map((h, j) => <rect width="5" height="5" x={i * 20} y={j * 20} rx={radius} />)
      )}
    </svg>
  );
}
