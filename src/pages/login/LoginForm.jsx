import { useDispatch } from 'react-redux';
import { Form, InfoLogin, Input, Label } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import { LogOutBtn } from 'components/UserMenu/UserMenu.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <InfoLogin>You have already have an account ? Please, log in</InfoLogin>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <LogOutBtn type="submit">Log In</LogOutBtn>
      </Form>
    </>
  );
};
