type FlexProps = {
  children: React.ReactNode;
  direction?: "column" | "row";
  gap?: string;
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "start" | "center" | "end";
  className?: string;
};

export type { FlexProps };
