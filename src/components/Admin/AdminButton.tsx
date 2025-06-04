import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// إضافة سكريبت Netlify Identity لتمكين تسجيل الدخول للوحة التحكم
const NetlifyIdentityScript = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  React.useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return null;
};

// مكون زر تسجيل الدخول للوحة التحكم
const AdminLoginButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// مكون لوحة التحكم
const AdminButton = () => {
  const handleAdminLogin = () => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.open();
    } else {
      window.location.href = '/admin/';
    }
  };

  return (
    <>
      <NetlifyIdentityScript />
      <AdminLoginButton
        variant="contained"
        onClick={handleAdminLogin}
      >
        لوحة التحكم
      </AdminLoginButton>
    </>
  );
};

export default AdminButton;
