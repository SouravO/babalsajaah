-- ============================================================
-- Bab Al Sajaah - Taxonomy tables (brands / categories)
-- Run this in the Supabase SQL editor (Dashboard -> SQL Editor)
-- or apply with `supabase db push`.
-- ============================================================

-- ------------------------------------------------------------
-- brands table
-- ------------------------------------------------------------
create table if not exists public.brands (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- categories table
-- ------------------------------------------------------------
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- Row Level Security
--   - anyone (public catalog) can read
--   - only authenticated users can write
--   (the app further restricts writes to ADMIN_EMAILS server-side)
-- ------------------------------------------------------------
alter table public.brands enable row level security;
alter table public.categories enable row level security;

drop policy if exists "Public read brands" on public.brands;
create policy "Public read brands"
  on public.brands for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated insert brands" on public.brands;
create policy "Authenticated insert brands"
  on public.brands for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated update brands" on public.brands;
create policy "Authenticated update brands"
  on public.brands for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated delete brands" on public.brands;
create policy "Authenticated delete brands"
  on public.brands for delete
  to authenticated
  using (true);

drop policy if exists "Public read categories" on public.categories;
create policy "Public read categories"
  on public.categories for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated insert categories" on public.categories;
create policy "Authenticated insert categories"
  on public.categories for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated update categories" on public.categories;
create policy "Authenticated update categories"
  on public.categories for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated delete categories" on public.categories;
create policy "Authenticated delete categories"
  on public.categories for delete
  to authenticated
  using (true);

-- ------------------------------------------------------------
-- Seed from existing part values so dropdowns start populated
-- ------------------------------------------------------------
insert into public.brands (name)
select distinct trim(brand)
from public.parts
where brand is not null and trim(brand) <> ''
on conflict (name) do nothing;

insert into public.categories (name)
select distinct trim(category)
from public.parts
where category is not null and trim(category) <> ''
on conflict (name) do nothing;
