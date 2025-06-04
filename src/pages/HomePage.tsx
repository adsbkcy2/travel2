import React from 'react';
import { Container, Box, Typography, Grid, Button, Card, CardMedia, CardContent, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

// Hero Section Background
const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1470&auto=format&fit=crop")',
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

// Search Box
const SearchBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: theme.spacing(4),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  maxWidth: '800px',
  width: '90%',
  position: 'absolute',
  bottom: '-50px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,
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

// Tour Card
const TourCard = styled(Card)(({ theme }) => ({
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

// Featured Destinations
const destinations = [
  {
    id: 1,
    name: 'دبي',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470&auto=format&fit=crop',
    description: 'استمتع بتجربة فريدة في مدينة الأحلام والترفيه',
    tours: 12,
  },
  {
    id: 2,
    name: 'القاهرة',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1470&auto=format&fit=crop',
    description: 'اكتشف سحر الحضارة المصرية القديمة والحديثة',
    tours: 8,
  },
  {
    id: 3,
    name: 'اسطنبول',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop',
    description: 'تمتع بجمال المدينة التي تجمع بين الشرق والغرب',
    tours: 10,
  },
  {
    id: 4,
    name: 'المالديف',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1374&auto=format&fit=crop',
    description: 'استرخ في أجمل الشواطئ والمنتجعات الفاخرة',
    tours: 6,
  },
];

// Popular Tours
const popularTours = [
  {
    id: 1,
    title: 'رحلة إلى أهرامات الجيزة',
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515022?q=80&w=1528&auto=format&fit=crop',
    price: 1200,
    duration: '5 أيام',
    location: 'القاهرة، مصر',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'جولة في برج خليفة ودبي مول',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=1470&auto=format&fit=crop',
    price: 1500,
    duration: '3 أيام',
    location: 'دبي، الإمارات',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'استكشاف آيا صوفيا والمسجد الأزرق',
    image: 'https://images.unsplash.com/photo-1545046371-72a3b6219f6a?q=80&w=1470&auto=format&fit=crop',
    price: 1300,
    duration: '4 أيام',
    location: 'اسطنبول، تركيا',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'منتجع المالديف الفاخر',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1365&auto=format&fit=crop',
    price: 2500,
    duration: '7 أيام',
    location: 'المالديف',
    rating: 5.0,
  },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'كانت رحلتي مع شركة رحلات العالم من أفضل التجارب السياحية التي خضتها. الخدمة ممتازة والتنظيم رائع والأماكن التي زرناها كانت مذهلة.',
    rating: 5,
  },
  {
    id: 2,
    name: 'سارة علي',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'أشكر فريق رحلات العالم على الاهتمام بأدق التفاصيل خلال رحلتنا. المرشد السياحي كان محترفاً وودوداً، والفنادق كانت فاخرة ومريحة.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'محمد خالد',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'تجربة لا تُنسى مع رحلات العالم. سأكرر التجربة معهم مرة أخرى بالتأكيد. أنصح الجميع بالتعامل معهم للحصول على تجربة سفر مميزة.',
    rating: 5,
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h1" component="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              اكتشف العالم مع رحلات العالم
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              رحلات مميزة، خدمات فاخرة، وذكريات لا تُنسى
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={Link}
              to="/tours"
              sx={{ 
                px: 4, 
                py: 1.5, 
                fontSize: '1.1rem',
                boxShadow: '0 4px 20px rgba(255, 138, 0, 0.3)',
              }}
            >
              استكشف الرحلات
            </Button>
          </Box>
        </Container>

        {/* Search Box */}
        <SearchBox>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>الوجهة</Typography>
              <Box sx={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                p: 1.5,
                display: 'flex',
                alignItems: 'center',
              }}>
                <LocationOnIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography>اختر الوجهة</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>تاريخ السفر</Typography>
              <Box sx={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                p: 1.5,
                display: 'flex',
                alignItems: 'center',
              }}>
                <CalendarMonthIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography>اختر التاريخ</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>المدة</Typography>
              <Box sx={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                p: 1.5,
                display: 'flex',
                alignItems: 'center',
              }}>
                <AccessTimeIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography>اختر المدة</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  py: 1.5, 
                  mt: { xs: 2, md: 4 },
                  bgcolor: 'primary.main',
                }}
                startIcon={<SearchIcon />}
              >
                بحث
              </Button>
            </Grid>
          </Grid>
        </SearchBox>
      </HeroSection>

      {/* Featured Destinations */}
      <Box sx={{ py: 12, mt: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SectionTitle variant="h2">
              وجهات مميزة
            </SectionTitle>
            <Typography variant="body1" sx={{ mt: 3, mb: 2, maxWidth: '700px', mx: 'auto' }}>
              اكتشف أجمل الوجهات السياحية حول العالم واستمتع بتجارب فريدة مع رحلات العالم
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {destinations.map((destination) => (
              <Grid item xs={12} sm={6} md={3} key={destination.id}>
                <Box 
                  sx={{ 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '300px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <Box 
                    component="img"
                    src={destination.image}
                    alt={destination.name}
                    sx={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {destination.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {destination.description}
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block' }}>
                      {destination.tours} رحلات متاحة
                    </Typography>
                  </Box>
                  <Button 
                    component={Link}
                    to={`/destinations/${destination.id}`}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0,
                      '&:hover': {
                        opacity: 1,
                        background: 'rgba(0, 120, 200, 0.3)',
                      },
                    }}
                  >
                    <Typography 
                      variant="button" 
                      sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main', 
                        px: 3, 
                        py: 1, 
                        borderRadius: '30px',
                        fontWeight: 600,
                      }}
                    >
                      عرض التفاصيل
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Tours */}
      <Box sx={{ py: 12, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SectionTitle variant="h2">
              رحلات مميزة
            </SectionTitle>
            <Typography variant="body1" sx={{ mt: 3, mb: 2, maxWidth: '700px', mx: 'auto' }}>
              اختر من بين أفضل الرحلات السياحية لدينا واستمتع بتجربة سفر لا تُنسى
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {popularTours.map((tour) => (
              <Grid item xs={12} sm={6} md={3} key={tour.id}>
                <TourCard>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={tour.image}
                      alt={tour.title}
                    />
                    <Box 
                      sx={{ 
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'secondary.main',
                        color: 'white',
                        py: 0.5,
                        px: 1.5,
                        borderRadius: '30px',
                        fontWeight: 600,
                      }}
                    >
                      {tour.price} $
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                      {tour.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon sx={{ color: 'primary.main', fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {tour.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AccessTimeIcon sx={{ color: 'primary.main', fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {tour.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Rating value={tour.rating} precision={0.1} readOnly size="small" />
                      <Button 
                        variant="outlined" 
                        color="primary"
                        component={Link}
                        to={`/tours/${tour.id}`}
                        size="small"
                      >
                        التفاصيل
                      </Button>
                    </Box>
                  </CardContent>
                </TourCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="contained" 
              color="primary"
              component={Link}
              to="/tours"
              size="large"
              sx={{ px: 4, py: 1 }}
            >
              عرض جميع الرحلات
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SectionTitle variant="h2">
              لماذا تختار رحلات العالم؟
            </SectionTitle>
            <Typography variant="body1" sx={{ mt: 3, mb: 2, maxWidth: '700px', mx: 'auto' }}>
              نحن نقدم خدمات سياحية متكاملة بأعلى مستويات الجودة والاحترافية
            </Typography>
          </Box>

          <Grid container spacing={4}>
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
                  <img src="https://img.icons8.com/fluency/48/000000/guarantee.png" alt="ضمان الجودة" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  ضمان الجودة
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  نضمن لك تجربة سفر استثنائية مع خدمات عالية الجودة وفنادق فاخرة
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
                  <img src="https://img.icons8.com/fluency/48/000000/cheap-2.png" alt="أسعار تنافسية" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  أسعار تنافسية
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  نقدم أفضل الأسعار التنافسية مع خيارات متعددة تناسب جميع الميزانيات
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
                  <img src="https://img.icons8.com/fluency/48/000000/online-support.png" alt="دعم على مدار الساعة" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  دعم على مدار الساعة
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  فريق دعم متخصص متاح على مدار الساعة لمساعدتك في أي وقت وأي مكان
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
                  <img src="https://img.icons8.com/fluency/48/000000/experience-skill.png" alt="خبرة واسعة" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  خبرة واسعة
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  نمتلك خبرة تزيد عن 15 عاماً في مجال السياحة والسفر حول العالم
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 12, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SectionTitle variant="h2">
              آراء عملائنا
            </SectionTitle>
            <Typography variant="body1" sx={{ mt: 3, mb: 2, maxWidth: '700px', mx: 'auto' }}>
              اقرأ ما يقوله عملاؤنا عن تجاربهم مع رحلات العالم
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box 
                      component="img"
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ 
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Rating value={testimonial.rating} precision={0.5} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
                    "{testimonial.text}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              bgcolor: 'primary.main',
              color: 'white',
              p: { xs: 4, md: 6 },
              borderRadius: '16px',
              textAlign: 'center',
              backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 120, 200, 0.8)',
                borderRadius: '16px',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                اشترك في نشرتنا الإخبارية
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
                احصل على أحدث العروض والخصومات ونصائح السفر مباشرة إلى بريدك الإلكتروني
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex',
                  maxWidth: '600px',
                  mx: 'auto',
                  bgcolor: 'white',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  style={{ 
                    flex: 1,
                    border: 'none',
                    padding: '16px 24px',
                    outline: 'none',
                    fontFamily: 'Cairo, Tajawal, sans-serif',
                    fontSize: '16px',
                  }}
                />
                <Button 
                  variant="contained" 
                  color="secondary"
                  sx={{ 
                    borderRadius: { xs: '0', sm: '0 50px 50px 0' },
                    px: 4,
                    py: { xs: 1.5, sm: 2 },
                  }}
                >
                  اشترك الآن
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
