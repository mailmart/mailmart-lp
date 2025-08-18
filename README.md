# MailMart Deal Hunter Landing Page

A simple and sleek landing page for MailMart, featuring a **waitlist signup** powered by Supabase.

---

## Features

- **Responsive design**: Works well on mobile, tablet, and desktop.
- **Waitlist form**: Users can submit their email to join the waitlist.
- **Duplicate prevention**: Same email cannot be added twice.
- **Toasts for feedback**: Friendly notifications for success, errors, or duplicates.
- **Supabase backend**: Stores waitlist emails securely with Row Level Security (RLS).

---

## Technologies Used

- **Frontend**: React + TypeScript + Vite
- **UI Components**: Tailwind CSS + Custom Button/Input components
- **Backend**: Supabase (database + authentication via anon key)
- **Notifications**: Custom toast hook

---

## Notes

- This project is **frontend-only**; no local clone/run is required for users.
- All emails are safely stored in Supabase and can be managed from the Supabase dashboard.
- Supabase anon key is public-safe and protected via RLS policies.

---

## License

MIT License © 2025 MailMart
