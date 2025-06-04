# إرشادات نشر موقع السياحة على GitHub وNetlify

## الخطوة 1: رفع المشروع على GitHub

1. قم بإنشاء مستودع جديد على GitHub
   - انتقل إلى [GitHub](https://github.com/)
   - سجل الدخول إلى حسابك
   - انقر على زر "New" لإنشاء مستودع جديد
   - أدخل اسم المستودع (مثلاً: tourism-website)
   - اختر "Public" أو "Private" حسب تفضيلك
   - انقر على "Create repository"

2. قم بتهيئة Git في مجلد المشروع المحلي وربطه بالمستودع البعيد:
   ```bash
   cd tourism-website-new
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/tourism-website.git
   git push -u origin main
   ```
   (استبدل USERNAME باسم المستخدم الخاص بك على GitHub)

## الخطوة 2: نشر الموقع على Netlify

1. قم بإنشاء حساب على [Netlify](https://www.netlify.com/) إذا لم يكن لديك حساب

2. انشر الموقع من GitHub:
   - انتقل إلى لوحة تحكم Netlify
   - انقر على "New site from Git"
   - اختر "GitHub" كمزود للمستودع
   - اختر المستودع الذي أنشأته للتو
   - في إعدادات النشر:
     - Build command: `npm run build`
     - Publish directory: `build`
   - انقر على "Deploy site"

3. قم بتخصيص اسم النطاق (اختياري):
   - بعد نشر الموقع، انقر على "Domain settings"
   - انقر على "Options" بجانب النطاق الافتراضي
   - اختر "Edit site name"
   - أدخل اسم النطاق المفضل لديك (مثلاً: tourism-website-example)

## الخطوة 3: إعداد Netlify CMS

1. قم بتفعيل Netlify Identity:
   - في لوحة تحكم Netlify، انتقل إلى "Site settings" > "Identity"
   - انقر على "Enable Identity"
   - قم بتكوين إعدادات التسجيل:
     - Registration preferences: اختر "Invite only"
     - External providers: يمكنك إضافة مزودي تسجيل دخول خارجيين (اختياري)

2. قم بتفعيل Git Gateway:
   - انتقل إلى "Site settings" > "Identity" > "Services"
   - انقر على "Enable Git Gateway"

3. قم بدعوة مستخدمين للوحة التحكم:
   - انتقل إلى "Identity" > "Invite users"
   - أدخل عناوين البريد الإلكتروني للمستخدمين الذين تريد منحهم حق الوصول إلى لوحة التحكم
   - انقر على "Send"
   - سيتلقى المستخدمون رسالة بريد إلكتروني تحتوي على رابط لإعداد كلمة المرور

## الخطوة 4: الوصول إلى لوحة التحكم

1. بعد اكتمال النشر، يمكن الوصول إلى لوحة التحكم عبر:
   - `https://your-site-name.netlify.app/admin/`
   - أو عن طريق النقر على زر "لوحة التحكم" في أسفل يمين الموقع

2. قم بتسجيل الدخول باستخدام بيانات الاعتماد التي تم إعدادها في الخطوة السابقة

## ملاحظات هامة

- تأكد من أن جميع التبعيات مثبتة قبل البناء والنشر
- إذا واجهت أي مشاكل في عملية النشر، تحقق من سجلات البناء في Netlify
- يمكنك تخصيص إعدادات النشر والبناء حسب احتياجاتك من خلال ملف `netlify.toml`

## الدعم والمساعدة

إذا واجهتك أي مشكلة أثناء عملية النشر، يمكنك الرجوع إلى:
- [وثائق Netlify](https://docs.netlify.com/)
- [وثائق Netlify CMS](https://www.netlifycms.org/docs/intro/)
- [وثائق GitHub](https://docs.github.com/)
