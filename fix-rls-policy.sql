-- Fix RLS policies for contact form
-- Run this in your Supabase SQL Editor

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow public insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_submissions;

-- Create a permissive policy to allow anyone to insert
CREATE POLICY "Enable insert for anonymous users"
ON contact_submissions
FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to read
CREATE POLICY "Enable read for authenticated users"
ON contact_submissions
FOR SELECT
TO authenticated
USING (true);
