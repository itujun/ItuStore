import { FormRegistration } from '../components/Fragments/FormRegistration';
import { AuthLayout } from '../components/Layouts/AuthLayout';

export const RegistrationPage = () => {
  return (
    <AuthLayout title="Registration">
      <FormRegistration />
    </AuthLayout>
  );
};
