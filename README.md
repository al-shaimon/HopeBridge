# HopeBridge Donation Platform

HopeBridge is a modern, premium, and emotionally engaging donation platform built with **Next.js 15**, **TypeScript**, and **Stripe**. It is designed to provide a seamless and transparent giving experience for donors worldwide.

![HopeBridge Preview](https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200)

## 🚀 Features

- **Next.js 15 App Router**: Leveraging the latest React features for optimal performance.
- **Stripe Integration**: Secure checkout process using Server Actions.
- **Premium Design**: Built with Tailwind CSS v4, shadcn/ui, and Framer Motion for high-end aesthetics.
- **Dark Mode Support**: Fully synchronized theme system with high-contrast visibility.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop with a focus on usability.
- **Dynamic SEO**: Automatically generated sitemaps, OG images, and favicons.
- **Mock Data System**: Easy to transition to a real database/CMS.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payments**: Stripe

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/al-shaimon/HopeBridge.git
cd HopeBridge
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your Stripe keys:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=https://hope-bridge.alshaimon.com
```

### 4. Run the development server
```bash
npm run dev
```
Open [https://hope-bridge.alshaimon.com](https://hope-bridge.alshaimon.com) to see the live project.

## 📁 Project Structure

- `/src/app`: Application routes and pages.
- `/src/components`: Reusable UI components.
- `/src/actions`: Server actions for Stripe and other logic.
- `/src/data`: Mock data for campaigns and testimonials.
- `/src/types`: TypeScript definitions.
- `/public`: Static assets and icons.

## 📄 License

This project is licensed under the MIT License.
