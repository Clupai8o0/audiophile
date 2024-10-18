export interface BaseProps {
  className?: string;
}

export interface BaseComponentProps extends BaseProps {
  children?: React.ReactNode;
}

export interface BaseWrapperProps extends BaseProps {
  children: React.ReactNode;
  id?: string;
  parentClassName?: string;
}