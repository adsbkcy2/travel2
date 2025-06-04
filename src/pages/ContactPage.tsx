import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button, TextField, InputAdornment, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '50vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1474&auto=format&fit=crop")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

// Section Title
const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  fontWeight: 700,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    backgroundColor: theme.palette.secondary.main,
  },
}));

// Contact Info Card
const ContactInfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              تواصل معنا
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تخطيط رحلتك المثالية
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* Contact Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                أرسل لنا رسالة
              </Typography>
              <Box component="form" sx={{ '& .MuiTextField-root': { mb: 3 } }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="الاسم"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="البريد الإلكتروني"
                      variant="outlined"
                      required
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="الموضوع"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="الرسالة"
                      variant="outlined"
                      required
                      multiline
                      rows={6}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      size="large"
                      startIcon={<SendIcon />}
                      sx={{ 
                        py: 1.5,
                        px: 4,
                        fontWeight: 600,
                      }}
                    >
                      إرسال الرسالة
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                معلومات الاتصال
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <ContactInfoCard>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main',
                          color: 'white',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <LocationOnIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          العنوان
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          شارع السياحة، المدينة السياحية، 12345
                        </Typography>
                      </Box>
                    </Box>
                  </ContactInfoCard>
                </Grid>
                <Grid item xs={12}>
                  <ContactInfoCard>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main',
                          color: 'white',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <PhoneIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          الهاتف
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                          +123 456 7890
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          +123 456 7891
                        </Typography>
                      </Box>
                    </Box>
                  </ContactInfoCard>
                </Grid>
                <Grid item xs={12}>
                  <ContactInfoCard>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main',
                          color: 'white',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <EmailIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          البريد الإلكتروني
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                          info@worldtravels.com
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          support@worldtravels.com
                        </Typography>
                      </Box>
                    </Box>
                  </ContactInfoCard>
                </Grid>
                <Grid item xs={12}>
                  <ContactInfoCard>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main',
                          color: 'white',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <AccessTimeIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          ساعات العمل
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                          الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          الجمعة - السبت: 10:00 صباحاً - 4:00 مساءً
                        </Typography>
                      </Box>
                    </Box>
                  </ContactInfoCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Map */}
          <Box sx={{ mt: 8 }}>
            <SectionTitle variant="h3" sx={{ textAlign: 'center' }}>
              موقعنا
            </SectionTitle>
            <Box 
              sx={{ 
                width: '100%',
                height: '400px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                mt: 4,
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1622754283499!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="خريطة الموقع"
              ></iframe>
            </Box>
          </Box>

          {/* FAQ Section */}
          <Box sx={{ mt: 8 }}>
            <SectionTitle variant="h3" sx={{ textAlign: 'center' }}>
              الأسئلة الشائعة
            </SectionTitle>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    كيف يمكنني حجز رحلة؟
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    يمكنك حجز رحلة من خلال موقعنا الإلكتروني عبر صفحة الرحلات، أو الاتصال بنا مباشرة عبر الهاتف أو البريد الإلكتروني.
                  </Typography>
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    ما هي سياسة الإلغاء والاسترداد؟
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    يمكن إلغاء الحجز واسترداد المبلغ كاملاً قبل 30 يوماً من موعد الرحلة. أما الإلغاء قبل 15 يوماً فيتم استرداد 50% من المبلغ. لا يوجد استرداد للإلغاء قبل أقل من 15 يوماً.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    هل تقدمون خدمة التأشيرات؟
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    نعم، نقدم خدمة المساعدة في استخراج التأشيرات للعديد من الدول، ويمكنك الاستفسار عن ذلك عند حجز الرحلة.
                  </Typography>
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    هل يمكن تخصيص برنامج الرحلة؟
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    نعم، نقدم خدمة تخصيص برامج الرحلات حسب رغبات العملاء. يمكنك التواصل معنا لمناقشة التفاصيل وتصميم رحلة تناسب احتياجاتك.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
