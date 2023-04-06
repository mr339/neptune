import BtnLoader from '@shared/components/loaders/btn-loader';
import { Button } from 'react-bootstrap';

type Props = {
  btnLabel: string;
  className?: string;
  btnFunction?: (data: any) => Promise<void> | null;
  variant?: string;
  type: any;
  isLoading?: boolean;
};

const PrimaryButton = ({
  btnLabel,
  className,
  btnFunction,
  variant = 'primary',
  type = 'button',
  isLoading,
}: Props) => {
  return (
    <Button
      type={type}
      disabled={isLoading}
      variant={variant}
      onClick={btnFunction}
      className={className}
    >
      {btnLabel} {isLoading && <BtnLoader />}
    </Button>
  );
};

export default PrimaryButton;
