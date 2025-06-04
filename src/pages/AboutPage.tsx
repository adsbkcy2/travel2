import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '50vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop")',
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

// Team Member Card
const TeamMemberCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
}));

// Sample Team Members
const teamMembers = [
  {
    id: 1,
    name: 'أحمد محمد',
    position: 'المدير التنفيذي',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'يمتلك أحمد خبرة تزيد عن 15 عاماً في مجال السياحة والسفر، وقد قاد الشركة منذ تأسيسها إلى النجاح والتميز.',
  },
  {
    id: 2,
    name: 'سارة علي',
    position: 'مديرة التسويق',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'انضمت سارة إلى فريقنا منذ 7 سنوات، وتتمتع بخبرة واسعة في مجال التسويق السياحي والعلاقات العامة.',
  },
  {
    id: 3,
    name: 'محمد خالد',
    position: 'مدير العمليات',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'يشرف محمد على جميع العمليات اليومية للشركة، ويضمن تقديم أفضل الخدمات لعملائنا الكرام.',
  },
  {
    id: 4,
    name: 'نورا سعيد',
    position: 'مديرة خدمة العملاء',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    bio: 'تقود نورا فريق خدمة العملاء بكفاءة عالية، وتحرص على تلبية جميع احتياجات العملاء وحل مشاكلهم بسرعة.',
  },
];

// Sample Partners
const partners = [
  { id: 1, name: 'الخطوط الجوية العربية', logo: 'https://img.icons8.com/color/96/000000/airplane-mode-on.png' },
  { id: 2, name: 'فنادق هيلتون', logo: 'https://img.icons8.com/color/96/000000/hotel-building.png' },
  { id: 3, name: 'شركة المركبات السياحية', logo: 'https://img.icons8.com/color/96/000000/bus.png' },
  { id: 4, name: 'شركة التأمين العالمية', logo: 'https://img.icons8.com/color/96/000000/insurance.png' },
  { id: 5, name: 'بنك السفر الدولي', logo: 'https://img.icons8.com/color/96/000000/bank-building.png' },
  { id: 6, name: 'شركة الاتصالات المتنقلة', logo: 'https://img.icons8.com/color/96/000000/phone.png' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              عن الشركة
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              تعرف على قصتنا ورؤيتنا وفريقنا المتميز
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* About Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Our Story */}
          <Box sx={{ mb: 8 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1443&auto=format&fit=crop"
                  alt="قصة شركتنا"
                  sx={{ 
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                  قصتنا
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  تأسست شركة رحلات العالم في عام 2010 بهدف تقديم خدمات سياحية متميزة تلبي تطلعات المسافرين العرب حول العالم. بدأنا كشركة صغيرة بفريق مكون من 5 أشخاص فقط، وسرعان ما نمت الشركة لتصبح واحدة من أهم شركات السياحة والسفر في المنطقة.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  على مدار السنوات، قمنا بتنظيم آلاف الرحلات السياحية الناجحة لعملائنا، وحرصنا دائماً على تقديم تجارب سفر لا تُنسى مع الاهتمام بأدق التفاصيل لضمان راحة ورضا العملاء.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  اليوم، نفتخر بأن نكون وجهة موثوقة للمسافرين الباحثين عن تجارب سفر مميزة وخدمات احترافية بأسعار تنافسية.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Vision & Mission */}
          <Box sx={{ mb: 8 }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 4,
                  borderRadius: '16px',
                  height: '100%',
                }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 3 }}>
                    رؤيتنا
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    أن نكون الشركة الرائدة في مجال السياحة والسفر على مستوى المنطقة، وأن نقدم تجارب سفر استثنائية تلبي تطلعات عملائنا وتتجاوز توقعاتهم.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  bgcolor: 'secondary.main',
                  color: 'white',
                  p: 4,
                  borderRadius: '16px',
                  height: '100%',
                }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 3 }}>
                    رسالتنا
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    تقديم خدمات سياحية متكاملة بأعلى مستويات الجودة والاحترافية، مع التركيز على تلبية احتياجات العملاء وتوفير تجارب سفر آمنة وممتعة بأسعار تنافسية.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Our Values */}
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <SectionTitle variant="h3">
              قيمنا
            </SectionTitle>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{ 
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      bgcolor: 'rgba(0, 120, 200, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/trust.png" alt="الثقة" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    الثقة
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    نبني علاقات قائمة على الثقة المتبادلة مع عملائنا وشركائنا
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{ 
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      bgcolor: 'rgba(0, 120, 200, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/quality.png" alt="الجودة" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    الجودة
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    نلتزم بتقديم أعلى مستويات الجودة في جميع خدماتنا
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{ 
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      bgcolor: 'rgba(0, 120, 200, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/innovation.png" alt="الابتكار" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    الابتكار
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    نسعى دائماً لتطوير خدماتنا وتقديم حلول مبتكرة لعملائنا
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{ 
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      bgcolor: 'rgba(0, 120, 200, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/diversity.png" alt="التنوع" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    التنوع
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    نحترم التنوع الثقافي ونقدم خدمات تناسب مختلف الاحتياجات
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Our Team */}
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <SectionTitle variant="h3">
              فريقنا
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
              يتكون فريقنا من خبراء متخصصين في مجال السياحة والسفر، يعملون بشغف لتقديم أفضل الخدمات لعملائنا
            </Typography>
            <Grid container spacing={4}>
              {teamMembers.map((member) => (
                <Grid item xs={12} sm={6} md={3} key={member.id}>
                  <TeamMemberCard>
                    <CardMedia
                      component="img"
                      height="250"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary.main" sx={{ mb: 2 }}>
                        {member.position}
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </TeamMemberCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Our Partners */}
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <SectionTitle variant="h3">
              شركاؤنا
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
              نتعاون مع أفضل الشركات والمؤسسات في مجال السياحة والسفر لتقديم خدمات متميزة لعملائنا
            </Typography>
            <Grid container spacing={4}>
              {partners.map((partner) => (
                <Grid item xs={6} sm={4} md={2} key={partner.id}>
                  <Box 
                    sx={{ 
                      p: 3, 
                      bgcolor: 'white', 
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <Box 
                      component="img"
                      src={partner.logo}
                      alt={partner.name}
                      sx={{ 
                        width: '64px',
                        height: '64px',
                        mx: 'auto',
                        mb: 1,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {partner.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Achievements */}
          <Box sx={{ textAlign: 'center' }}>
            <SectionTitle variant="h3">
              إنجازاتنا
            </SectionTitle>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 4, 
                  bgcolor: 'white', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}>
                  <Typography variant="h2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    15+
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    سنوات من الخبرة
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 4, 
                  bgcolor: 'white', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}>
                  <Typography variant="h2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    10K+
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    عميل سعيد
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 4, 
                  bgcolor: 'white', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}>
                  <Typography variant="h2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    50+
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    وجهة سياحية
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 4, 
                  bgcolor: 'white', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}>
                  <Typography variant="h2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    100+
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    شريك عالمي
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

export default AboutPage;
