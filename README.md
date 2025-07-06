# 🌍 LangLift — лендинг для онлайн-платформы изучения языков

LangLift — это адаптивный лендинг, разработанный на **Next.js + SCSS**. Цель проекта — создать современный, анимированный и быстро загружаемый сайт, который представляет образовательную платформу для изучения языков через живое общение.

---

## 🚀 Demo

🔗 [Перейти на сайт](......)

---

## ✨ Возможности

- ✅ Современный стек: **Next.js App Router** + **SCSS**
- ✅ Полностью адаптивный дизайн (мобилка, планшет, десктоп)
- ✅ Бургер-меню для телефонов
- ✅ Анимации при скролле (AOS)
- ✅ SEO-оптимизирован: `title`, `description`, `favicon`, `Open Graph`
- ✅ Готов к продакшену и деплою на **Vercel**
- ✅ Простая структура для доработки

---

## 🧠 Использованные технологии

- [Next.js 14](https://nextjs.org/)
- [SCSS](https://sass-lang.com/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

---

## 📁 Структура проекта
app/
├─ layout.tsx // Общий layout с мета-данными
├─ page.tsx // Главная страница
components/
├─ common/ // Navbar, Footer
├─ sections/ // Hero, About, Pricing, Contact
styles/
├─ globals.scss // Глобальные стили
├─ hero.scss, ... // Стили по секциям
public/
├─ logo.svg, og-image.png, favicon.ico


---

## 🛠 Установка и запуск

```bash
git clone https://github.com/kLot2005/langlift.git
cd langlift
npm install
npm run dev
```


---

📦 Деплой
Сайт задеплоен на Vercel:

```bash
npx vercel
```


---

🧾 Планы на будущее
Подключить форму EmailJS или Telegram Bot
Добавить CMS (например, Contentful)
Интегрировать Google Analytics
Мультиязычность (i18n)

---

📌 Автор
Проект разработан как практика для портфолио.
Made with ❤️ and ☕ by @kLot2005


