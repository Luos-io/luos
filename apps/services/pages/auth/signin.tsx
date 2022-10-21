import { useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';
import { getProviders, LiteralUnion, signIn, SignInOptions } from 'next-auth/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import * as Yup from 'yup';

import Carousel from 'components/carousel/carousel';

import type { GetServerSidePropsContext } from 'next/types';

import type { SignInErrorTypes } from 'types/auth';

import Styles from 'pages/auth/auth.module.scss';

const items = [
  {
    name: 'Network Display',
    text: [
      'Visualize your entire embedded network, the physical topology, the route of all your services, and the load of your computing units.',
    ],

    image: '/assets/images/Network_display_Luos.svg',
  },
  {
    name: 'Monitor and debug (coming soon)',
    text: ['Monitor your system in real-time, debug it, and update your firmware if needed.'],
    image: '/assets/images/Coming_soon_Luos.svg',
  },
  {
    name: 'Projects and registry (coming soon)',
    text: [' Manage your embedded projects.'],
    image: '/assets/images/Coming_soon_Luos.svg',
  },
];

const oAuthSignInErrors: Record<SignInErrorTypes, string> = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'The e-mail could not be sent.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.',
};

interface Form {
  email: string;
}

export const SignIn = ({
  providers,
  callbackUrl,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [values, setValues] = useState<Form>({
    email: '',
  });

  const handleChange = (prop: keyof Form) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleLogin =
    (provider: LiteralUnion<BuiltInProviderType, string>, dataForm?: Form) => () => {
      const defaultSignInOptions: SignInOptions = {
        callbackUrl: Array.isArray(callbackUrl) ? callbackUrl[0] : callbackUrl,
      };
      if (provider === 'email') {
        signIn(provider, {
          ...defaultSignInOptions,
          email: dataForm?.email,
          redirect: true,
        });
      } else {
        signIn(provider, defaultSignInOptions);
      }
    };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} />
      <Grid item xs={8} sx={{ paddingTop: '10px !important' }}>
        <Paper elevation={3} className={Styles.auth}>
          <Box className={`Styles.auth__box ${Styles.auth__box__blue}`}>
            <Carousel items={items} />
          </Box>
          <Box className={`${Styles.auth__box} ${Styles.auth__box__form}`}>
            <h2>Login</h2>
            {error && (
              <Alert id="alertMessage" severity="error">
                {oAuthSignInErrors[error] ?? oAuthSignInErrors.default}
              </Alert>
            )}
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  {
                    // provider.name !== 'Credentials' ? (
                    provider.name !== 'Email' ? (
                      <Button
                        className={Styles.auth__box__form__button__sso}
                        onClick={handleLogin(provider.id)}
                      >
                        Login with {provider.name}{' '}
                        <i className={`fab fa-${provider.name.toLowerCase()}`}></i>
                      </Button>
                    ) : (
                      ''
                    )
                  }
                </div>
              ))}
            <div className={Styles.separator}>
              <span> or </span>
            </div>
            <TextField
              className={Styles.auth__box__form__button}
              id="email"
              label="Email"
              type="email"
              value={values.email}
              {...register('email')}
              error={errors.email ? true : false}
              onChange={handleChange('email')}
            />
            <Typography variant="inherit" color="textSecondary" className={Styles.typo}>
              <ErrorMessage errors={errors} name="singleErrorInput" as="p" />
            </Typography>
            <Button
              onClick={handleLogin('email', values)}
              className={`${Styles.auth__box__form__button__sso} ${Styles.auth__box__form__login}`}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
export default SignIn;

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const providers = await getProviders();
  return {
    props: {
      providers,
      callbackUrl: query.callbackUrl || '/',
      error: (query.error as SignInErrorTypes) || null,
    },
  };
};
