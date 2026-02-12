-- Drop existing feedback table if it exists to ensure correct schema
drop table if exists public.feedback;

-- Create feedback table
create table public.feedback (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  comment text not null
);

-- Enable Row Level Security (RLS)
alter table public.feedback enable row level security;

-- Create a policy that allows anyone to insert feedback
create policy "Enable insert for everyone" on public.feedback
  for insert with check (true);

-- Create a policy that allows everyone to view feedback
create policy "Enable read access for all users" on public.feedback
  for select using (true);
