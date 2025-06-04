import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button, Divider, Rating, Chip, List, ListItem, ListItemIcon, ListItemText, Paper, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '60vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
  },
}));

// Section Title
const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  fontWeight: 700,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    right: 0,
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.secondary.main,
  },
}));

// Sample Tour Data
const tourData = {
  id: 1,
  title: 'رحلة إلى أهرامات الجيزة',
  images: [
    'https://images.unsplash.com/photo-1568322445389-f64ac2515022?q=80&w=1528&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1471&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590133146484-8a5c8f1f59f2?q=80&w=1472&auto=format&fit=crop',
  ],
  price: 1200,
  discountPrice: 999,
  duration: '5 أيام',
  location: 'القاهرة، مصر',
  rating: 4.8,
  reviewsCount: 124,
  category: 'ثقافية',
  description: 'استمتع برحلة مميزة إلى أهرامات الجيزة، أحد عجائب الدنيا السبع، واكتشف أسرار الحضارة المصرية القديمة. تشمل الرحلة زيارة الأهرامات الثلاثة (خوفو، خفرع، منقرع) وتمثال أبو الهول الشهير، بالإضافة إلى متحف المركب الشمسية ومتحف القاهرة الكبير. ستتعرف على تاريخ بناء الأهرامات وأسرار الفراعنة من خلال مرشد سياحي متخصص.',
  itinerary: [
    {
      day: 'اليوم الأول',
      title: 'الوصول إلى القاهرة',
      description: 'الاستقبال في المطار والانتقال إلى الفندق. استراحة قصيرة ثم جولة مسائية في القاهرة القديمة.',
    },
    {
      day: 'اليوم الثاني',
      title: 'زيارة أهرامات الجيزة',
      description: 'زيارة أهرامات الجيزة الثلاثة (خوفو، خفرع، منقرع) وتمثال أبو الهول. غداء في مطعم محلي ثم زيارة متحف المركب الشمسية.',
    },
    {
      day: 'اليوم الثالث',
      title: 'المتحف المصري وخان الخليلي',
      description: 'زيارة المتحف المصري في الصباح للتعرف على الآثار المصرية القديمة. بعد الغداء، زيارة سوق خان الخليلي التاريخي للتسوق.',
    },
    {
      day: 'اليوم الرابع',
      title: 'قلعة صلاح الدين والأزهر',
      description: 'زيارة قلعة صلاح الدين الأيوبي والجامع الأزهر. غداء في مطعم تقليدي ثم وقت حر للاستكشاف.',
    },
    {
      day: 'اليوم الخامس',
      title: 'المغادرة',
      description: 'وقت حر في الصباح للتسوق أو الاسترخاء. ثم الانتقال إلى المطار للمغادرة.',
    },
  ],
  includes: [
    'الإقامة في فندق 5 نجوم',
    'وجبة إفطار يومية',
    'النقل من وإلى المطار',
    'جميع التنقلات بين المواقع السياحية',
    'مرشد سياحي متخصص باللغة العربية',
    'تذاكر دخول جميع المواقع السياحية',
    'وجبتي غداء في مطاعم محلية',
  ],
  excludes: [
    'تذاكر الطيران',
    'التأمين الصحي',
    'المشروبات خلال الوجبات',
    'الإكراميات',
    'المصاريف الشخصية',
  ],
  reviews: [
    {
      id: 1,
      name: 'أحمد محمد',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: '15 مايو 2025',
      rating: 5,
      comment: 'رحلة رائعة جداً، المرشد السياحي كان محترفاً وودوداً، والفندق كان فاخراً ومريحاً. أنصح بشدة بهذه الرحلة لمن يرغب في استكشاف الحضارة المصرية القديمة.',
    },
    {
      id: 2,
      name: 'سارة علي',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '3 أبريل 2025',
      rating: 4,
      comment: 'تجربة جميلة ومميزة، الأهرامات مذهلة والمرشد السياحي كان لديه معلومات قيمة. الفندق كان جيداً لكن الطعام كان متوسطاً.',
    },
    {
      id: 3,
      name: 'محمد خالد',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      date: '20 مارس 2025',
      rating: 5,
      comment: 'من أفضل الرحلات التي قمت بها، كل شيء كان منظماً بشكل ممتاز من البداية إلى النهاية. سأكرر التجربة مع هذه الشركة مرة أخرى بالتأكيد.',
    },
  ],
  relatedTours: [
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
      id: 6,
      title: 'جولة في باريس الرومانسية',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop',
      price: 1800,
      duration: '6 أيام',
      location: 'باريس، فرنسا',
      rating: 4.8,
    },
    {
      id: 8,
      title: 'رحلة إلى الأهرامات المايا',
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1467&auto=format&fit=crop',
      price: 1700,
      duration: '7 أيام',
      location: 'المكسيك',
      rating: 4.7,
    },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tour-tabpanel-${index}`}
      aria-labelledby={`tour-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TourDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tabValue, setTabValue] = React.useState(0);
  const [mainImage, setMainImage] = React.useState(tourData.images[0]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader sx={{ backgroundImage: `url(${mainImage})` }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: 6 }}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} md={8}>
              <Box>
                <Chip 
                  label={tourData.category} 
                  sx={{ 
                    bgcolor: 'secondary.main', 
                    color: 'white', 
                    mb: 2,
                    fontWeight: 600,
                  }} 
                />
                <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
                  {tourData.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ mr: 0.5 }} />
                    <Typography variant="body1">{tourData.location}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ mr: 0.5 }} />
                    <Typography variant="body1">{tourData.duration}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ mr: 0.5, color: '#FFD700' }} />
                    <Typography variant="body1">{tourData.rating} ({tourData.reviewsCount} تقييم)</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: { xs: 'left', md: 'left' } }}>
                {tourData.discountPrice ? (
                  <>
                    <Typography 
                      variant="h4" 
                      component="p" 
                      sx={{ 
                        fontWeight: 800,
                        color: 'secondary.main',
                      }}
                    >
                      {tourData.discountPrice} $
                    </Typography>
                    <Typography 
                      variant="h6" 
                      component="p" 
                      sx={{ 
                        textDecoration: 'line-through',
                        color: 'rgba(255,255,255,0.7)',
                        mb: 1,
                      }}
                    >
                      {tourData.price} $
                    </Typography>
                  </>
                ) : (
                  <Typography 
                    variant="h4" 
                    component="p" 
                    sx={{ 
                      fontWeight: 800,
                      color: 'secondary.main',
                      mb: 1,
                    }}
                  >
                    {tourData.price} $
                  </Typography>
                )}
                <Typography variant="body2" sx={{ mb: 2 }}>
                  السعر للشخص الواحد
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  احجز الآن
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </PageHeader>

      {/* Tour Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              {/* Image Gallery */}
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                  {tourData.images.map((image, index) => (
                    <Grid item xs={3} key={index}>
                      <Box 
                        component="img"
                        src={image}
                        alt={`صورة ${index + 1}`}
                        sx={{ 
                          width: '100%',
                          height: '80px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          border: mainImage === image ? '3px solid' : 'none',
                          borderColor: 'primary.main',
                        }}
                        onClick={() => handleThumbnailClick(image)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Tabs */}
              <Box sx={{ mb: 4 }}>
                <Paper sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange}
                    variant="fullWidth"
                    sx={{
                      '& .MuiTab-root': {
                        fontWeight: 600,
                      },
                    }}
                  >
                    <Tab label="تفاصيل الرحلة" />
                    <Tab label="برنامج الرحلة" />
                    <Tab label="التقييمات" />
                  </Tabs>

                  {/* Tab Content */}
                  <TabPanel value={tabValue} index={0}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        وصف الرحلة
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                        {tourData.description}
                      </Typography>

                      <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            ما يشمله السعر
                          </Typography>
                          <List>
                            {tourData.includes.map((item, index) => (
                              <ListItem key={index} sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                  <CheckCircleIcon sx={{ color: 'success.main' }} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                            ما لا يشمله السعر
                          </Typography>
                          <List>
                            {tourData.excludes.map((item, index) => (
                              <ListItem key={index} sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                  <CancelIcon sx={{ color: 'error.main' }} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </Grid>
                      </Grid>
                    </Box>
                  </TabPanel>

                  <TabPanel value={tabValue} index={1}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                        برنامج الرحلة
                      </Typography>
                      {tourData.itinerary.map((day, index) => (
                        <Box key={index} sx={{ mb: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box 
                              sx={{ 
                                bgcolor: 'primary.main',
                                color: 'white',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 600,
                                mr: 2,
                              }}
                            >
                              {index + 1}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {day.day}
                              </Typography>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {day.title}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography variant="body1" sx={{ pl: 7 }}>
                            {day.description}
                          </Typography>
                          {index < tourData.itinerary.length - 1 && (
                            <Box 
                              sx={{ 
                                height: '30px',
                                width: '2px',
                                bgcolor: 'primary.main',
                                ml: 2.5,
                                mt: 2,
                              }}
                            />
                          )}
                        </Box>
                      ))}
                    </Box>
                  </TabPanel>

                  <TabPanel value={tabValue} index={2}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                        تقييمات العملاء
                      </Typography>
                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mr: 2 }}>
                            {tourData.rating}
                          </Typography>
                          <Box>
                            <Rating value={tourData.rating} precision={0.1} readOnly />
                            <Typography variant="body2" color="text.secondary">
                              من {tourData.reviewsCount} تقييم
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {tourData.reviews.map((review) => (
                        <Box key={review.id} sx={{ mb: 3, pb: 3, borderBottom: '1px solid #e0e0e0' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box 
                              component="img"
                              src={review.image}
                              alt={review.name}
                              sx={{ 
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                mr: 2,
                              }}
                            />
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {review.name}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Rating value={review.rating} size="small" readOnly />
                                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                  {review.date}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Typography variant="body1">
                            {review.comment}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </TabPanel>
                </Paper>
              </Box>

              {/* Related Tours */}
              <Box>
                <SectionTitle variant="h5">
                  رحلات مشابهة
                </SectionTitle>
                <Grid container spacing={3}>
                  {tourData.relatedTours.map((tour) => (
                    <Grid item xs={12} sm={6} md={4} key={tour.id}>
                      <Card sx={{ 
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <CardMedia
                          component="img"
                          height="160"
                          image={tour.image}
                          alt={tour.title}
                        />
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
                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                              {tour.price} $
                            </Typography>
                            <Rating value={tour.rating} precision={0.1} readOnly size="small" />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              {/* Booking Form */}
              <Paper sx={{ borderRadius: '16px', overflow: 'hidden', mb: 4 }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    احجز هذه الرحلة
                  </Typography>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      تاريخ السفر
                    </Typography>
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
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      عدد المسافرين
                    </Typography>
                    <Box sx={{ 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '8px', 
                      p: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <GroupIcon sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography>اختر العدد</Typography>
                    </Box>
                  </Box>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    fullWidth
                    sx={{ 
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    احجز الآن
                  </Button>
                </Box>
              </Paper>

              {/* Tour Info */}
              <Paper sx={{ borderRadius: '16px', overflow: 'hidden', mb: 4 }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    معلومات الرحلة
                  </Typography>
                </Box>
                <Box sx={{ p: 3 }}>
                  <List>
                    <ListItem sx={{ px: 0, py: 1.5, borderBottom: '1px solid #e0e0e0' }}>
                      <ListItemIcon sx={{ minWidth: '40px' }}>
                        <LocationOnIcon sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="الوجهة" 
                        secondary={tourData.location}
                        primaryTypographyProps={{ variant: 'subtitle2', fontWeight: 600 }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1.5, borderBottom: '1px solid #e0e0e0' }}>
                      <ListItemIcon sx={{ minWidth: '40px' }}>
                        <AccessTimeIcon sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="المدة" 
                        secondary={tourData.duration}
                        primaryTypographyProps={{ variant: 'subtitle2', fontWeight: 600 }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1.5, borderBottom: '1px solid #e0e0e0' }}>
                      <ListItemIcon sx={{ minWidth: '40px' }}>
                        <GroupIcon sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="الحد الأقصى للمجموعة" 
                        secondary="15 شخص"
                        primaryTypographyProps={{ variant: 'subtitle2', fontWeight: 600 }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1.5, borderBottom: '1px solid #e0e0e0' }}>
                      <ListItemIcon sx={{ minWidth: '40px' }}>
                        <StarIcon sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="التقييم" 
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={tourData.rating} precision={0.1} readOnly size="small" />
                            <Typography variant="body2" sx={{ ml: 1 }}>
                              ({tourData.reviewsCount} تقييم)
                            </Typography>
                          </Box>
                        }
                        primaryTypographyProps={{ variant: 'subtitle2', fontWeight: 600 }}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Paper>

              {/* Need Help */}
              <Paper sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    بحاجة إلى مساعدة؟
                  </Typography>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    إذا كانت لديك أي استفسارات حول هذه الرحلة، فلا تتردد في التواصل معنا.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    fullWidth
                    sx={{ 
                      py: 1.5,
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    اتصل بنا
                  </Button>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    أو اتصل بنا مباشرة على
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', color: 'primary.main' }}>
                    +123 456 7890
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TourDetailPage;
