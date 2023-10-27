import { forwardRef } from 'react';
import { Input } from './Input';
import { Label } from './Label';

// eslint-disable-next-line react/display-name
export const InputForm = forwardRef((props, ref) => {
  const { type, name, placeholder, label } = props;
  return (
    <div className="mb-3">
      <Label name={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});
