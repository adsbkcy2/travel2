import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button, Divider, Avatar, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '50vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop")',
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

// Blog Card
const BlogCard = styled(Card)(({ theme }) => ({
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

// Sample Blog Posts
const blogPosts = [
  {
    id: 1,
    title: 'أفضل 10 وجهات سياحية لعام 2025',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop',
    excerpt: 'تعرف على أفضل الوجهات السياحية التي يمكنك زيارتها هذا العام، من الشواطئ الاستوائية إلى المدن التاريخية.',
    date: '15 مايو 2025',
    author: 'أحمد محمد',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    category: 'نصائح سفر',
    tags: ['وجهات سياحية', 'سفر', '2025'],
  },
  {
    id: 2,
    title: 'كيفية توفير المال أثناء السفر',
    image: 'https://images.unsplash.com/photo-1511465390398-532913e8328d?q=80&w=1470&auto=format&fit=crop',
    excerpt: 'نصائح وحيل لتوفير المال أثناء السفر دون التضحية بتجربة سفر ممتعة ومريحة.',
    date: '3 أبريل 2025',
    author: 'سارة علي',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    category: 'نصائح سفر',
    tags: ['توفير', 'ميزانية', 'سفر اقتصادي'],
  },
  {
    id: 3,
    title: 'تجربتي في رحلة سفاري في تنزانيا',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1468&auto=format&fit=crop',
    excerpt: 'قصة رحلتي المثيرة في سفاري تنزانيا، حيث شاهدت الحيوانات البرية في موطنها الطبيعي.',
    date: '20 مارس 2025',
    author: 'محمد خالد',
    authorImage: 'https://randomuser.me/api/portraits/men/22.jpg',
    category: 'تجارب سفر',
    tags: ['سفاري', 'تنزانيا', 'حياة برية'],
  },
  {
    id: 4,
    title: 'أفضل المطاعم في اسطنبول',
    image: 'https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?q=80&w=1470&auto=format&fit=crop',
    excerpt: 'دليل شامل لأفضل المطاعم في اسطنبول، من المأكولات التقليدية إلى المطاعم العالمية الفاخرة.',
    date: '5 فبراير 2025',
    author: 'ليلى أحمد',
    authorImage: 'https://randomuser.me/api/portraits/women/17.jpg',
    category: 'طعام وثقافة',
    tags: ['مطاعم', 'اسطنبول', 'طعام'],
  },
  {
    id: 5,
    title: 'كيفية التغلب على رهاب السفر',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop',
    excerpt: 'نصائح عملية للتغلب على الخوف من السفر والطيران، واستمتع برحلاتك دون قلق أو توتر.',
    date: '18 يناير 2025',
    author: 'عمر حسن',
    authorImage: 'https://randomuser.me/api/portraits/men/67.jpg',
    category: 'نصائح سفر',
    tags: ['رهاب السفر', 'نصائح نفسية', 'سفر'],
  },
  {
    id: 6,
    title: 'أفضل الفنادق البيئية حول العالم',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1449&auto=format&fit=crop',
    excerpt: 'استكشف أفضل الفنادق الصديقة للبيئة حول العالم، والتي توفر تجربة إقامة فاخرة مع الحفاظ على البيئة.',
    date: '10 يناير 2025',
    author: 'نورا سعيد',
    authorImage: 'https://randomuser.me/api/portraits/women/63.jpg',
    category: 'إقامة',
    tags: ['فنادق بيئية', 'سياحة مستدامة', 'إقامة فاخرة'],
  },
];

// Categories
const categories = [
  { id: 'all', name: 'جميع المقالات' },
  { id: 'travel-tips', name: 'نصائح سفر' },
  { id: 'experiences', name: 'تجارب سفر' },
  { id: 'food-culture', name: 'طعام وثقافة' },
  { id: 'accommodation', name: 'إقامة' },
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => {
        if (selectedCategory === 'travel-tips') return post.category === 'نصائح سفر';
        if (selectedCategory === 'experiences') return post.category === 'تجارب سفر';
        if (selectedCategory === 'food-culture') return post.category === 'طعام وثقافة';
        if (selectedCategory === 'accommodation') return post.category === 'إقامة';
        return true;
      });

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              مدونة السفر
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
              نصائح وتجارب سفر ملهمة لمساعدتك في تخطيط رحلتك القادمة
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* Blog Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Category Filter */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'contained' : 'outlined'}
                  color={selectedCategory === category.id ? 'primary' : 'inherit'}
                  onClick={() => handleCategoryChange(category.id)}
                  sx={{ 
                    px: 3, 
                    py: 1,
                    borderRadius: '30px',
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Featured Post */}
          {selectedCategory === 'all' && (
            <Box sx={{ mb: 6 }}>
              <BlogCard>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      sx={{ height: { xs: '300px', md: '100%' } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Chip 
                        label={blogPosts[0].category} 
                        color="primary" 
                        size="small" 
                        sx={{ alignSelf: 'flex-start', mb: 2 }} 
                      />
                      <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                        {blogPosts[0].title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
                        {blogPosts[0].excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar src={blogPosts[0].authorImage} sx={{ width: 40, height: 40, mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {blogPosts[0].author}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarMonthIcon sx={{ fontSize: '1rem', mr: 0.5, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {blogPosts[0].date}
                          </Typography>
                        </Box>
                      </Box>
                      <Button 
                        variant="contained" 
                        color="primary"
                        component={Link}
                        to={`/blog/${blogPosts[0].id}`}
                        sx={{ alignSelf: 'flex-start' }}
                      >
                        اقرأ المزيد
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </BlogCard>
            </Box>
          )}

          {/* Blog Posts Grid */}
          <Grid container spacing={4}>
            {filteredPosts.slice(selectedCategory === 'all' ? 1 : 0).map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <BlogCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Chip 
                      label={post.category} 
                      color="primary" 
                      size="small" 
                      sx={{ mb: 2 }} 
                    />
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {post.excerpt}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={post.authorImage} sx={{ width: 30, height: 30, mr: 1 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {post.author}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarMonthIcon sx={{ fontSize: '0.8rem', mr: 0.5, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      component={Link}
                      to={`/blog/${post.id}`}
                      fullWidth
                    >
                      اقرأ المزيد
                    </Button>
                  </Box>
                </BlogCard>
              </Grid>
            ))}
          </Grid>

          {/* Newsletter */}
          <Box sx={{ mt: 8, bgcolor: '#f8f9fa', borderRadius: '16px', p: 4, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              اشترك في نشرتنا الإخبارية
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
              احصل على أحدث نصائح السفر والعروض الحصرية مباشرة إلى بريدك الإلكتروني
            </Typography>
            <Box 
              sx={{ 
                display: 'flex',
                maxWidth: '600px',
                mx: 'auto',
                bgcolor: 'white',
                borderRadius: '50px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
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
                color="primary"
                sx={{ 
                  borderRadius: '0',
                  px: 4,
                }}
              >
                اشترك الآن
              </Button>
            </Box>
          </Box>

          {/* Popular Tags */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              الوسوم الشائعة
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
              {['سفر', 'سياحة', 'وجهات سياحية', 'نصائح سفر', 'سفاري', 'شواطئ', 'مغامرات', 'ثقافة', 'طعام', 'فنادق', 'طيران', 'سياحة مستدامة'].map((tag) => (
                <Chip 
                  key={tag}
                  label={tag}
                  variant="outlined"
                  sx={{ m: 0.5 }}
                  clickable
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogPage;
