const Icon = ({ width = 24, height = 24, color = "#2c3046", children, ...props }) => ( <svg
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    height={height}
    fill={color}
    {...props}
  >
    {children}
  </svg>
);

export const Play = (props) => (
  <Icon {...props}>
    <path d="M4.8 20V4l14.4 8-14.4 8z" />
  </Icon>
);

export const Paused = (props) => (
  <Icon {...props}>
    <path d="M5.7 4h3.8c.5 0 .9.4.9.9v14.2c0 .5-.4.9-1 .9H5.8a1 1 0 01-.9-.9V4.9c0-.5.4-.9 1-.9zm8.8 0h3.8c.5 0 .9.4.9.9v14.2c0 .5-.4.9-1 .9h-3.7a1 1 0 01-.9-.9V4.9c0-.5.4-.9 1-.9z" />
  </Icon>
);

export const Stopped = (props) => (
  <Icon {...props}>
    <path d="M6 6h12v12H6z" />
  </Icon>
);

export const PlayNext = (props) => (
  <Icon {...props}>
    <path d="M6 17L14 12L6 7V17Z" />
    <path d="M18 7H15V12V17H18V7Z" />
  </Icon>
);

export const PlayPrev = (props) => (
  <Icon {...props}>
    <path d="M18 17L10 12L18 7V17Z" />
    <path d="M6 7H9V17H6V7Z" />  
  </Icon>
);
