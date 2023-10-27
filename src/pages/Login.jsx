import { FormLogin } from '../components/Fragments/FormLogin';
import { AuthLayout } from '../components/Layouts/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};
