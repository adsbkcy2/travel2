import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '50vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1631&auto=format&fit=crop")',
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

// Destination Card
const DestinationCard = styled(Card)(({ theme }) => ({
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

// Sample Destinations Data
const destinations = [
  {
    id: 1,
    name: 'دبي',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470&auto=format&fit=crop',
    description: 'استمتع بتجربة فريدة في مدينة الأحلام والترفيه',
    tours: 12,
    country: 'الإمارات العربية المتحدة',
    bestTime: 'نوفمبر إلى أبريل',
  },
  {
    id: 2,
    name: 'القاهرة',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1470&auto=format&fit=crop',
    description: 'اكتشف سحر الحضارة المصرية القديمة والحديثة',
    tours: 8,
    country: 'مصر',
    bestTime: 'أكتوبر إلى أبريل',
  },
  {
    id: 3,
    name: 'اسطنبول',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop',
    description: 'تمتع بجمال المدينة التي تجمع بين الشرق والغرب',
    tours: 10,
    country: 'تركيا',
    bestTime: 'أبريل إلى أكتوبر',
  },
  {
    id: 4,
    name: 'المالديف',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1374&auto=format&fit=crop',
    description: 'استرخ في أجمل الشواطئ والمنتجعات الفاخرة',
    tours: 6,
    country: 'المالديف',
    bestTime: 'نوفمبر إلى أبريل',
  },
  {
    id: 5,
    name: 'باريس',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop',
    description: 'استمتع بأجواء رومانسية في عاصمة النور والفن',
    tours: 9,
    country: 'فرنسا',
    bestTime: 'أبريل إلى أكتوبر',
  },
  {
    id: 6,
    name: 'روما',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop',
    description: 'اكتشف تاريخ وثقافة الإمبراطورية الرومانية',
    tours: 7,
    country: 'إيطاليا',
    bestTime: 'أبريل إلى يونيو وسبتمبر إلى أكتوبر',
  },
  {
    id: 7,
    name: 'بالي',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop',
    description: 'استمتع بالطبيعة الخلابة والشواطئ الساحرة',
    tours: 8,
    country: 'إندونيسيا',
    bestTime: 'أبريل إلى أكتوبر',
  },
  {
    id: 8,
    name: 'طوكيو',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1371&auto=format&fit=crop',
    description: 'اكتشف مزيج فريد من التقاليد والتكنولوجيا المتطورة',
    tours: 5,
    country: 'اليابان',
    bestTime: 'مارس إلى مايو وسبتمبر إلى نوفمبر',
  },
  {
    id: 9,
    name: 'نيويورك',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop',
    description: 'استكشف المدينة التي لا تنام وناطحات السحاب الشهيرة',
    tours: 6,
    country: 'الولايات المتحدة الأمريكية',
    bestTime: 'أبريل إلى يونيو وسبتمبر إلى نوفمبر',
  },
];

// Continents
const continents = [
  { id: 'all', name: 'جميع القارات' },
  { id: 'asia', name: 'آسيا' },
  { id: 'europe', name: 'أوروبا' },
  { id: 'africa', name: 'أفريقيا' },
  { id: 'north-america', name: 'أمريكا الشمالية' },
  { id: 'south-america', name: 'أمريكا الجنوبية' },
  { id: 'australia', name: 'أستراليا' },
];

const DestinationsPage: React.FC = () => {
  const [selectedContinent, setSelectedContinent] = React.useState('all');

  const handleContinentChange = (continent: string) => {
    setSelectedContinent(continent);
  };

  // Filter destinations based on selected continent (in a real app, this would be more sophisticated)
  const filteredDestinations = destinations;

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              وجهاتنا السياحية
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              اكتشف أجمل الوجهات السياحية حول العالم
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* Destinations Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Continent Filter */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {continents.map((continent) => (
                <Button
                  key={continent.id}
                  variant={selectedContinent === continent.id ? 'contained' : 'outlined'}
                  color={selectedContinent === continent.id ? 'primary' : 'inherit'}
                  onClick={() => handleContinentChange(continent.id)}
                  sx={{ 
                    px: 3, 
                    py: 1,
                    borderRadius: '30px',
                  }}
                >
                  {continent.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Destinations Grid */}
          <Grid container spacing={4}>
            {filteredDestinations.map((destination) => (
              <Grid item xs={12} sm={6} md={4} key={destination.id}>
                <DestinationCard>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={destination.image}
                      alt={destination.name}
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
                      {destination.tours} رحلات
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                      {destination.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon sx={{ color: 'primary.main', fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {destination.country}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {destination.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        أفضل وقت للزيارة: {destination.bestTime}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        component={Link}
                        to={`/destinations/${destination.id}`}
                        size="small"
                      >
                        عرض الرحلات
                      </Button>
                    </Box>
                  </CardContent>
                </DestinationCard>
              </Grid>
            ))}
          </Grid>

          {/* World Map Section */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <SectionTitle variant="h3">
              خريطة وجهاتنا
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
              استكشف وجهاتنا السياحية حول العالم واختر وجهتك المفضلة للسفر
            </Typography>
            <Box 
              sx={{ 
                bgcolor: '#f8f9fa',
                borderRadius: '16px',
                p: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1633&auto=format&fit=crop"
                alt="خريطة العالم"
                sx={{ 
                  width: '100%',
                  maxWidth: '900px',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Box>

          {/* Travel Tips */}
          <Box sx={{ mt: 8 }}>
            <SectionTitle variant="h3" sx={{ textAlign: 'center' }}>
              نصائح للمسافرين
            </SectionTitle>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={4}>
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
                    <img src="https://img.icons8.com/fluency/48/000000/passport.png" alt="جواز السفر" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    تأكد من وثائق السفر
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    تأكد من صلاحية جواز السفر والتأشيرات المطلوبة قبل السفر بوقت كافٍ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
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
                    <img src="https://img.icons8.com/fluency/48/000000/health-book.png" alt="التأمين الصحي" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    التأمين الصحي
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    احرص على الحصول على تأمين صحي للسفر يغطي جميع الحالات الطارئة
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
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
                    <img src="https://img.icons8.com/fluency/48/000000/currency-exchange.png" alt="العملات" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    العملات المحلية
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    تعرف على العملة المحلية وأسعار الصرف قبل السفر وجهز بعض النقود المحلية
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

export default DestinationsPage;
