# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean budget tracking application (가계부) built with Next.js 16.0. The application allows users to track income and expenses with Korean won currency formatting and Korean category labels.

## Key Architecture

- **Framework**: Next.js 16.0 with App Router
- **UI**: React 19.2 with Tailwind CSS 4.0 and Lucide React icons
- **Language**: TypeScript with strict mode enabled
- **State Management**: React useState (component-level state)
- **Styling**: Tailwind CSS with custom Geist fonts

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Application Structure

- `app/layout.tsx` - Root layout with Geist font configuration and metadata
- `app/page.tsx` - Main budget app component with transaction management
- `app/globals.css` - Global styles and Tailwind directives

## Key Features in Main Component

The budget app (`app/page.tsx`) includes:
- Transaction management (income/expense tracking)
- Korean currency formatting with `Intl.NumberFormat("ko-KR")`
- Korean categories for both income and expenses
- Real-time balance calculation
- Category-wise expense statistics with progress bars
- Responsive design with Tailwind grid layouts

## Development Notes

- Uses Korean language throughout the UI (forms, labels, categories)
- Currency amounts are formatted in Korean won (원)
- Component uses client-side rendering (`"use client"`)
- TypeScript path mapping configured with `@/*` alias
- No testing framework currently configured
