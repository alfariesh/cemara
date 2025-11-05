# Cemara — PIHC

Cemara adalah platform digital untuk PT Pupuk Indonesia (PIHC). Dibangun dengan Next.js 16, React 19, dan Tailwind CSS untuk memberikan pengalaman pengguna yang modern dan responsif.

## Fitur Utama

- **Authentication & Authorization** - Sistem login dan registrasi dengan validasi password yang kuat
- **Email Verification** - Flow verifikasi email dengan PIN code
- **Indonesian Localization** - Seluruh UI dalam Bahasa Indonesia
- **Responsive Design** - Optimal di mobile, tablet, dan desktop
- **Modern UI Components** - Dibangun dengan Untitled UI React components

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **UI Library**: React 19.2.0 dengan Untitled UI components
- **Styling**: Tailwind CSS v4.1 dengan PostCSS
- **Type Safety**: TypeScript 5.9
- **Accessibility**: React Aria Components
- **Animations**: Motion & Tailwind Animate

[Learn more about Untitled UI React](https://www.untitledui.com/react) • [Untitled UI Documentation](https://www.untitledui.com/react/docs/introduction)

## Project Structure

```
src/
├── app/
│   ├── (auth)/              # Route group untuk autentikasi
│   │   ├── login/           # Halaman login
│   │   └── register/        # Halaman registrasi
│   ├── (verification)/      # Route group untuk email verification
│   │   ├── enter-email/     # Input email untuk verifikasi
│   │   ├── input-pin/       # Input PIN code (4 digit)
│   │   ├── set-password/    # Setup password baru
│   │   ├── success/         # Halaman sukses
│   │   └── layout.tsx       # Verification layout
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Root page (redirect ke /login)
└── components/
    └── base/
        └── pin-input/       # Custom PinInput component dengan input-otp
```

## Getting Started

Jalankan development server:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser. Halaman akan otomatis redirect ke `/login`.

## Alur Aplikasi

### Authentication
1. **Login** (`/login`) - Login dengan email & password
2. **Register** (`/register`) - Registrasi user baru dengan:
   - Nama lengkap
   - Email
   - Password (minimal 8 karakter, huruf besar/kecil, angka, spesial char)
   - Konfirmasi password
   - Pilihan tipe kemitraan (radio button)

### Email Verification
1. **Enter Email** (`/enter-email`) - Input email untuk mendapat PIN
2. **Input PIN** (`/input-pin`) - Input 4-digit PIN verification code
3. **Set Password** (`/set-password`) - Setup password baru dengan validasi
4. **Success** (`/success`) - Konfirmasi sukses & link ke login

## Resources

Cemara menggunakan library dan design resources berikut:

- **[Untitled UI React](https://www.untitledui.com/react)** - Modern React UI component library
- **[Untitled UI Figma](https://www.untitledui.com/figma)** - Figma UI kit & design system
- **[Untitled UI Icons](https://www.untitledui.com/react/resources/icons)** - Icon library untuk modern UI
- **[input-otp](https://input-otp.js.org/)** - OTP/PIN input component library

## License

Proyek ini menggunakan komponen dari Untitled UI React yang dilisensikan di bawah MIT license. Anda bebas menggunakannya untuk proyek komersial unlimited.

> [!NOTE]
> Lisensi ini berlaku untuk starter kit dan komponen open-source. [Untitled UI React PRO](https://www.untitledui.com/react) memiliki lebih banyak komponen advanced dan tunduk pada [license agreement](https://www.untitledui.com/license) terpisah.
