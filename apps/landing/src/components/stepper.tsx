export type StepperProps = {
  color: string;
};
export const Stepper = (props: StepperProps) => {
  return (
    <svg width="27" height="2" viewBox="0 0 27 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-1.90735e-06 0H27V2H-1.90735e-06V0Z" fill={props.color} />
    </svg>
  );
};
export default Stepper;
