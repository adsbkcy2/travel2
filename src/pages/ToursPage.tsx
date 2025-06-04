import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Rating, Button, FormControl, InputLabel, Select, MenuItem, Slider, TextField, InputAdornment, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '50vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop")',
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

// Filter Box
const FilterBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(4),
}));

// Sample Tours Data
const tours = [
  {
    id: 1,
    title: 'رحلة إلى أهرامات الجيزة',
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515022?q=80&w=1528&auto=format&fit=crop',
    price: 1200,
    duration: '5 أيام',
    location: 'القاهرة، مصر',
    rating: 4.8,
    category: 'ثقافية',
  },
  {
    id: 2,
    title: 'جولة في برج خليفة ودبي مول',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=1470&auto=format&fit=crop',
    price: 1500,
    duration: '3 أيام',
    location: 'دبي، الإمارات',
    rating: 4.9,
    category: 'تسوق',
  },
  {
    id: 3,
    title: 'استكشاف آيا صوفيا والمسجد الأزرق',
    image: 'https://images.unsplash.com/photo-1545046371-72a3b6219f6a?q=80&w=1470&auto=format&fit=crop',
    price: 1300,
    duration: '4 أيام',
    location: 'اسطنبول، تركيا',
    rating: 4.7,
    category: 'ثقافية',
  },
  {
    id: 4,
    title: 'منتجع المالديف الفاخر',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1365&auto=format&fit=crop',
    price: 2500,
    duration: '7 أيام',
    location: 'المالديف',
    rating: 5.0,
    category: 'شاطئية',
  },
  {
    id: 5,
    title: 'سفاري في تنزانيا',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1468&auto=format&fit=crop',
    price: 3000,
    duration: '8 أيام',
    location: 'تنزانيا',
    rating: 4.9,
    category: 'مغامرات',
  },
  {
    id: 6,
    title: 'جولة في باريس الرومانسية',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop',
    price: 1800,
    duration: '6 أيام',
    location: 'باريس، فرنسا',
    rating: 4.8,
    category: 'رومانسية',
  },
  {
    id: 7,
    title: 'استكشاف جزر البهاما',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1364&auto=format&fit=crop',
    price: 2200,
    duration: '5 أيام',
    location: 'البهاما',
    rating: 4.6,
    category: 'شاطئية',
  },
  {
    id: 8,
    title: 'رحلة إلى الأهرامات المايا',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1467&auto=format&fit=crop',
    price: 1700,
    duration: '7 أيام',
    location: 'المكسيك',
    rating: 4.7,
    category: 'ثقافية',
  },
];

// Categories
const categories = ['الكل', 'ثقافية', 'شاطئية', 'مغامرات', 'رومانسية', 'تسوق', 'عائلية'];

const ToursPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([500, 3000]);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Filter tours based on selected filters
  const filteredTours = tours.filter((tour) => {
    const matchesCategory = selectedCategory === 'الكل' || tour.category === selectedCategory;
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Sort tours based on selected sort option
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'duration') {
      return parseInt(a.duration) - parseInt(b.duration);
    }
    return 0; // Default: recommended
  });

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              استكشف رحلاتنا المميزة
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              اختر من بين مجموعة متنوعة من الرحلات السياحية حول العالم
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* Tours Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Search and Filter */}
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="ابحث عن رحلة أو وجهة..."
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="sort-label">ترتيب حسب</InputLabel>
                  <Select
                    labelId="sort-label"
                    value={sortBy}
                    onChange={handleSortChange}
                    label="ترتيب حسب"
                  >
                    <MenuItem value="recommended">الأكثر شهرة</MenuItem>
                    <MenuItem value="price-low">السعر: من الأقل إلى الأعلى</MenuItem>
                    <MenuItem value="price-high">السعر: من الأعلى إلى الأقل</MenuItem>
                    <MenuItem value="rating">التقييم</MenuItem>
                    <MenuItem value="duration">المدة</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  startIcon={<FilterListIcon />}
                  onClick={toggleFilters}
                >
                  الفلاتر
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Filters */}
          {showFilters && (
            <FilterBox>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    نطاق السعر
                  </Typography>
                  <Box sx={{ px: 2 }}>
                    <Slider
                      value={priceRange}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      min={500}
                      max={3000}
                      step={100}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="body2">{priceRange[0]} $</Typography>
                      <Typography variant="body2">{priceRange[1]} $</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    التصنيف
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      displayEmpty
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </FilterBox>
          )}

          {/* Results Count */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">
              {sortedTours.length} رحلة متاحة
            </Typography>
          </Box>

          {/* Tours Grid */}
          <Grid container spacing={4}>
            {sortedTours.map((tour) => (
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

          {/* No Results */}
          {sortedTours.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                لا توجد رحلات متطابقة مع معايير البحث
              </Typography>
              <Typography variant="body1" color="text.secondary">
                يرجى تعديل معايير البحث أو الفلاتر للحصول على نتائج
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ToursPage;
