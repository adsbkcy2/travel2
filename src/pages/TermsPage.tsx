import React from 'react';
import { Container, Box, Typography, Grid, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Page Header
const PageHeader = styled(Box)(({ theme }) => ({
  height: '30vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop")',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    backgroundColor: theme.palette.primary.main,
  },
}));

const TermsPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
              الشروط والأحكام
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
              يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا
            </Typography>
          </Box>
        </Container>
      </PageHeader>

      {/* Terms Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              آخر تحديث: 1 يونيو 2025
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              مرحباً بك في موقع شركة رحلات العالم للسياحة والسفر. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا الإلكتروني أو خدماتنا. باستخدامك لموقعنا أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
            </Typography>
          </Box>

          {/* Terms Sections */}
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  1. تعريفات
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  "الشركة" أو "نحن" أو "لنا" تشير إلى شركة رحلات العالم للسياحة والسفر.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  "الخدمات" تشير إلى جميع الخدمات المقدمة من قبل الشركة، بما في ذلك على سبيل المثال لا الحصر: حجز الرحلات السياحية، حجز الفنادق، تنظيم الجولات السياحية، وخدمات النقل.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  "العميل" أو "أنت" يشير إلى الشخص أو الكيان الذي يستخدم موقعنا أو خدماتنا.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  "الموقع" يشير إلى موقع الشركة الإلكتروني وجميع صفحاته وخدماته.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  2. استخدام الموقع
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  2.1 يجب أن تكون بالغاً من العمر 18 عاماً على الأقل لاستخدام خدماتنا.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  2.2 أنت مسؤول عن الحفاظ على سرية بيانات حسابك وكلمة المرور الخاصة بك.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  2.3 تتعهد بعدم استخدام الموقع لأي غرض غير قانوني أو محظور بموجب هذه الشروط.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  2.4 تحتفظ الشركة بالحق في تعديل أو إيقاف الموقع أو أي جزء منه في أي وقت دون إشعار مسبق.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  3. الحجوزات والدفع
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  3.1 جميع الأسعار المعروضة على الموقع هي بالدولار الأمريكي ما لم يُذكر خلاف ذلك.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  3.2 يتم تأكيد الحجز فقط بعد استلام الدفعة المطلوبة وتأكيد الحجز من قبل الشركة.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  3.3 قد تتطلب بعض الحجوزات دفع مبلغ تأمين غير قابل للاسترداد.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  3.4 تحتفظ الشركة بالحق في تغيير الأسعار في أي وقت قبل تأكيد الحجز.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  4. سياسة الإلغاء والاسترداد
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  4.1 يمكن إلغاء الحجز واسترداد المبلغ كاملاً قبل 30 يوماً من موعد الرحلة.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  4.2 الإلغاء قبل 15-29 يوماً من موعد الرحلة يستحق استرداد 50% من المبلغ المدفوع.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  4.3 الإلغاء قبل أقل من 15 يوماً من موعد الرحلة لا يستحق أي استرداد.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  4.4 قد تختلف سياسة الإلغاء والاسترداد حسب نوع الخدمة أو العرض، ويتم توضيح ذلك عند الحجز.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  5. المسؤولية والتعويض
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  5.1 تقدم الشركة خدماتها "كما هي" دون أي ضمانات من أي نوع، صريحة أو ضمنية.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  5.2 لا تتحمل الشركة المسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام خدماتنا.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  5.3 أنت توافق على تعويض الشركة وحمايتها من أي مطالبات أو خسائر أو التزامات ناشئة عن استخدامك للموقع أو خدماتنا.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  5.4 لا تتحمل الشركة المسؤولية عن أي تأخير أو إلغاء أو تغيير في الخدمات بسبب ظروف خارجة عن سيطرتها، مثل الكوارث الطبيعية أو الإضرابات أو الأعمال الإرهابية.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  6. حقوق الملكية الفكرية
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  6.1 جميع المحتويات المنشورة على الموقع، بما في ذلك النصوص والصور والشعارات والرسومات، هي ملك للشركة أو مرخصة لها.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  6.2 لا يجوز نسخ أو توزيع أو نقل أو عرض أو بيع أو ترخيص أو تعديل أي محتوى من الموقع دون إذن كتابي مسبق من الشركة.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  7. التعديلات على الشروط والأحكام
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  7.1 تحتفظ الشركة بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  7.2 سيتم نشر التعديلات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد نشر التعديلات موافقة منك على الشروط المعدلة.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <SectionTitle variant="h4">
                  8. القانون المطبق وتسوية النزاعات
                </SectionTitle>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  8.1 تخضع هذه الشروط والأحكام للقوانين المعمول بها في بلد تسجيل الشركة.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  8.2 أي نزاع ينشأ عن استخدام الموقع أو خدماتنا سيتم حله أولاً من خلال المفاوضات الودية، وإذا تعذر ذلك، فمن خلال التحكيم وفقاً لقواعد التحكيم المعمول بها في بلد تسجيل الشركة.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: '#f8f9fa', p: 4, borderRadius: '16px', mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  الأسئلة الشائعة
                </Typography>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      كيف يمكنني إلغاء حجزي؟
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      يمكنك إلغاء حجزك من خلال حسابك الشخصي على الموقع، أو بالاتصال بخدمة العملاء. يرجى مراجعة سياسة الإلغاء والاسترداد للاطلاع على الشروط المطبقة.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      هل يمكنني تعديل حجزي بعد التأكيد؟
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      نعم، يمكن تعديل الحجز في بعض الحالات، ولكن قد تطبق رسوم تعديل. يرجى الاتصال بخدمة العملاء في أقرب وقت ممكن لمناقشة خيارات التعديل.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      ما هي طرق الدفع المقبولة؟
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      نقبل الدفع عبر بطاقات الائتمان (فيزا، ماستركارد، أمريكان إكسبريس)، والتحويل البنكي، وبعض طرق الدفع الإلكترونية مثل PayPal.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>

              <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 4, borderRadius: '16px' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  هل تحتاج إلى مساعدة؟
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  فريق خدمة العملاء لدينا متاح للإجابة على جميع استفساراتك وتقديم المساعدة اللازمة.
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    البريد الإلكتروني:
                  </Typography>
                  <Typography variant="body2">
                    support@worldtravels.com
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    الهاتف:
                  </Typography>
                  <Typography variant="body2">
                    +123 456 7890
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6 }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              باستخدامك لموقعنا أو خدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TermsPage;
