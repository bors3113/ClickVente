# Contact Form Setup Guide

This guide explains how to set up the contact form with Supabase database and email notifications.

## Prerequisites

- Supabase account (https://supabase.com)
- Resend account for email notifications (https://resend.com)

## Setup Steps

### 1. Supabase Database Setup

1. Go to your Supabase project dashboard: https://mrbrgsslpzlskrqmipmu.supabase.co
2. Navigate to the **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `supabase-setup.sql` into the editor
5. Click **Run** to execute the SQL script

This will create:
- A `contact_submissions` table to store form submissions
- Indexes for better query performance
- Row Level Security (RLS) policies
- Auto-updating timestamp triggers

### 2. Verify Database Table

1. In Supabase dashboard, go to **Table Editor**
2. You should see the `contact_submissions` table with the following columns:
   - `id` (UUID, Primary Key)
   - `name` (TEXT)
   - `email` (TEXT)
   - `phone` (TEXT, nullable)
   - `message` (TEXT)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

### 3. Set Up Email Notifications with Resend

1. Go to https://resend.com and sign up/log in
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the API key

### 4. Update Environment Variables

1. Open the `.env.local` file in your project root
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. The file should look like this:
   ```
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=https://mrbrgsslpzlskrqmipmu.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_IqXgs0NjpULj2aW5LGp-8g_7smLGbbk

   # Resend Email Configuration
   RESEND_API_KEY=re_your_actual_api_key_here

   # Email Configuration
   NOTIFICATION_EMAIL=borsab19@gmail.com
   ```

### 5. Configure Email Domain (Optional but Recommended)

By default, Resend uses `onboarding@resend.dev` as the sender. For production:

1. In Resend dashboard, go to **Domains**
2. Add and verify your custom domain
3. Update the `from` field in `app/api/contact/route.ts`:
   ```typescript
   from: 'Contact Form <noreply@yourdomain.com>',
   ```

### 6. Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your website
3. Scroll to the contact form section
4. Fill out and submit the form
5. Check:
   - Supabase Table Editor to see the submission
   - Your email (borsab19@gmail.com) for the notification

## Viewing Form Submissions

### In Supabase Dashboard

1. Go to **Table Editor**
2. Select `contact_submissions` table
3. View all submissions with timestamps

### Query Examples

You can run these queries in the SQL Editor:

```sql
-- View all submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- View submissions from today
SELECT * FROM contact_submissions
WHERE created_at >= CURRENT_DATE
ORDER BY created_at DESC;

-- Count total submissions
SELECT COUNT(*) FROM contact_submissions;

-- Find submissions by email
SELECT * FROM contact_submissions
WHERE email = 'example@email.com'
ORDER BY created_at DESC;
```

## Security Notes

1. **Row Level Security (RLS)** is enabled on the table
2. **Anonymous users** can only INSERT (submit forms)
3. **Authenticated users** can read all submissions
4. The Supabase anon key is safe to use in client-side code
5. Never commit your `.env.local` file to version control

## Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify Supabase URL and anon key in `.env.local`
- Check that RLS policies are set correctly
- Ensure the table exists in Supabase

### Email not received
- Verify RESEND_API_KEY is correct in `.env.local`
- Check Resend dashboard for delivery logs
- Verify the recipient email (borsab19@gmail.com)
- Check spam folder
- Note: Resend has rate limits on free tier

### Database connection errors
- Verify your Supabase project is active
- Check that the Supabase URL is correct
- Ensure your network allows connections to Supabase

## Files Modified/Created

- `components/ContactForm.tsx` - Contact form component
- `app/api/contact/route.ts` - API endpoint for form submission
- `lib/supabase.ts` - Supabase client configuration
- `.env.local` - Environment variables (not in git)
- `supabase-setup.sql` - Database setup script
- `CONTACT_FORM_SETUP.md` - This setup guide

## Support

If you encounter any issues, check:
1. Supabase project logs
2. Next.js server console
3. Browser developer console
4. Resend dashboard logs
