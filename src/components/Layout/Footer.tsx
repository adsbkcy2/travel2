import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box, IconButton, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'white', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Company */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              رحلات العالم
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Cairo, Tajawal, sans-serif', lineHeight: 1.8 }}>
              شركة رحلات العالم هي شركة سياحة رائدة تقدم خدمات سياحية متكاملة بأعلى مستويات الجودة والاحترافية. نسعى دائماً لتقديم تجارب سفر لا تُنسى لعملائنا الكرام.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" sx={{ color: '#1877f2', mr: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" sx={{ color: '#1da1f2', mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" sx={{ color: '#e4405f', mr: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="youtube" sx={{ color: '#ff0000' }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              روابط سريعة
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {[
                { title: 'الرئيسية', path: '/' },
                { title: 'عن الشركة', path: '/about' },
                { title: 'الرحلات', path: '/tours' },
                { title: 'الوجهات', path: '/destinations' },
                { title: 'المدونة', path: '/blog' },
                { title: 'تواصل معنا', path: '/contact' },
              ].map((item) => (
                <Box component="li" key={item.title} sx={{ mb: 1 }}>
                  <Link to={item.path} style={{ color: '#ccc', textDecoration: 'none', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {item.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              معلومات الاتصال
            </Typography>
            <Box sx={{ display: 'flex', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1, color: '#ff8a00' }} />
              <Typography variant="body2" sx={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                شارع السياحة، المدينة السياحية، 12345
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: '#ff8a00' }} />
              <Typography variant="body2" sx={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                +123 456 7890
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', mb: 2 }}>
              <EmailIcon sx={{ mr: 1, color: '#ff8a00' }} />
              <Typography variant="body2" sx={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                info@worldtravels.com
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              النشرة الإخبارية
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              اشترك في نشرتنا الإخبارية للحصول على أحدث العروض والأخبار
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <TextField
                size="small"
                placeholder="البريد الإلكتروني"
                variant="outlined"
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '4px 0 0 4px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                      borderRight: 'none',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '& input': {
                      color: 'white',
                    }
                  }
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#ff8a00', 
                  borderRadius: '0 4px 4px 0',
                  '&:hover': {
                    bgcolor: '#e67e00',
                  }
                }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            © {new Date().getFullYear()} رحلات العالم. جميع الحقوق محفوظة.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
