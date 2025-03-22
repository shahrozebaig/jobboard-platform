# Job Board Platform

A modern job board platform built with Next.js, allowing users to post and search for jobs with a clean, responsive interface.

## Features

- 🔐 User Authentication (Login/Signup)
- 🌓 Dark/Light Mode Support
- 📱 Fully Responsive Design
- 💼 Job Listings with Search Functionality
- ➕ Post New Job Listings
- 🔍 Detailed Job Views
- 🎯 Real-time Form Validation
- 🚀 Fast Page Loading with Next.js
- 🗄️ MongoDB Database Integration
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend:**
  - Next.js 14
  - React
  - Tailwind CSS
  - Shadcn UI Components
  - Lucide Icons

- **Backend:**
  - Next.js API Routes
  - MongoDB
  - bcryptjs for Password Hashing

- **State Management:**
  - Local Storage for Auth
  - React Hooks

- **Development Tools:**
  - TypeScript
  - ESLint
  - Prettier

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB installed locally
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/shahrozebaig/jobboard-platform.git
cd jobboard-platform
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root directory
```env
MONGODB_URI=mongodb://localhost:27017/jobboard
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure


```
jobboard-platform/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   └── register/
│   │   │       └── route.ts
│   │   └── jobs/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   ├── jobs/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── post-job/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── auth/
│   │   ├── login-form.tsx
│   │   └── signup-form.tsx
│   ├── jobs/
│   │   ├── job-card.tsx
│   │   ├── job-list.tsx
│   │   └── job-details.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── other-shadcn-components...
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── shared/
│       ├── loading-spinner.tsx
│       └── error-message.tsx
├── lib/
│   ├── mongodb.ts
│   ├── auth.ts
│   ├── utils.ts
│   └── types.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useJobs.ts
│   └── useForm.ts
├── models/
│   ├── User.ts
│   └── Job.ts
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   └── custom-styles.css
├── config/
│   └── constants.ts
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```





## Key Features in Detail

### Authentication
- Secure user registration and login
- Password hashing with bcrypt
- Protected routes for authenticated users

### Job Management
- Create and post new job listings
- Search and filter jobs
- Detailed job view pages
- Responsive job cards

### User Interface
- Clean and modern design
- Dark/Light mode toggle
- Responsive navigation
- Form validation with error messages
- Toast notifications for user feedback

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Shahroze Baig - [GitHub Profile](https://github.com/shahrozebaig)

Project Link: [https://github.com/shahrozebaig/jobboard-platform](https://github.com/shahrozebaig/jobboard-platform)
