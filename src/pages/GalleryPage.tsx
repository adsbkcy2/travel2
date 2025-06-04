import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '50vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1374&auto=format&fit=crop")',
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

// Gallery Item
const GalleryItem = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
}));

// Sample Gallery Data
const galleryCategories = [
  { id: 'all', name: 'جميع الصور' },
  { id: 'destinations', name: 'وجهات سياحية' },
  { id: 'hotels', name: 'فنادق' },
  { id: 'activities', name: 'أنشطة' },
  { id: 'nature', name: 'طبيعة' },
];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470&auto=format&fit=crop',
    title: 'برج خليفة، دبي',
    category: 'destinations',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1568322445389-f64ac2515022?q=80&w=1528&auto=format&fit=crop',
    title: 'أهرامات الجيزة، مصر',
    category: 'destinations',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop',
    title: 'آيا صوفيا، اسطنبول',
    category: 'destinations',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1374&auto=format&fit=crop',
    title: 'شاطئ المالديف',
    category: 'nature',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1449&auto=format&fit=crop',
    title: 'فندق فاخر',
    category: 'hotels',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1470&auto=format&fit=crop',
    title: 'غوص في البحر الأحمر',
    category: 'activities',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop',
    title: 'برج إيفل، باريس',
    category: 'destinations',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop',
    title: 'غرفة فندقية فاخرة',
    category: 'hotels',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop',
    title: 'رحلة سفاري',
    category: 'activities',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1470&auto=format&fit=crop',
    title: 'شاطئ استوائي',
    category: 'nature',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1374&auto=format&fit=crop',
    title: 'جبال الألب',
    category: 'nature',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1374&auto=format&fit=crop',
    title: 'تسلق الجبال',
    category: 'activities',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop',
    title: 'منتجع فاخر',
    category: 'hotels',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1470&auto=format&fit=crop',
    title: 'شلالات طبيعية',
    category: 'nature',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop',
    title: 'فندق على البحر',
    category: 'hotels',
  },
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (imageId: number) => {
    setCurrentImage(imageId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePrevImage = () => {
    if (currentImage === null) return;
    
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImage(filteredImages[prevIndex].id);
  };

  const handleNextImage = () => {
    if (currentImage === null) return;
    
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentImage(filteredImages[nextIndex].id);
  };

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Get current image data
  const currentImageData = galleryImages.find(img => img.id === currentImage);

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              معرض الصور
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              استكشف مجموعة من الصور الرائعة لوجهاتنا السياحية والفنادق والأنشطة
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* Gallery Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Category Filter */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {galleryCategories.map((category) => (
                <Box
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  sx={{ 
                    px: 3, 
                    py: 1.5,
                    borderRadius: '30px',
                    bgcolor: selectedCategory === category.id ? 'primary.main' : 'transparent',
                    color: selectedCategory === category.id ? 'white' : 'text.primary',
                    border: selectedCategory === category.id ? 'none' : '1px solid #e0e0e0',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: selectedCategory === category.id ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  {category.name}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Gallery Grid */}
          <Grid container spacing={3}>
            {filteredImages.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <GalleryItem onClick={() => handleImageClick(image.id)}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={image.src}
                    alt={image.title}
                    sx={{ 
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                </GalleryItem>
              </Grid>
            ))}
          </Grid>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                لا توجد صور في هذه الفئة
              </Typography>
              <Typography variant="body1" color="text.secondary">
                يرجى اختيار فئة أخرى لعرض الصور
              </Typography>
            </Box>
          )}

          {/* Image Modal */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="image-modal"
            aria-describedby="full-size-image"
          >
            <Box sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: '90%',
              maxWidth: '1000px',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 1,
              borderRadius: '16px',
              outline: 'none',
            }}>
              <Box sx={{ position: 'relative' }}>
                <IconButton 
                  onClick={handleCloseModal}
                  sx={{ 
                    position: 'absolute', 
                    top: 8, 
                    right: 8, 
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)',
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
                
                <Box sx={{ position: 'relative' }}>
                  {currentImageData && (
                    <img 
                      src={currentImageData.src} 
                      alt={currentImageData.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        borderRadius: '8px',
                      }} 
                    />
                  )}
                  
                  <IconButton 
                    onClick={handlePrevImage}
                    sx={{ 
                      position: 'absolute', 
                      top: '50%', 
                      left: 16, 
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.7)',
                      }
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                  
                  <IconButton 
                    onClick={handleNextImage}
                    sx={{ 
                      position: 'absolute', 
                      top: '50%', 
                      right: 16, 
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.7)',
                      }
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
                
                {currentImageData && (
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h6" component="h3">
                      {currentImageData.title}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Modal>
        </Container>
      </Box>
    </>
  );
};

export default GalleryPage;
