-- ============================================================
-- Bab Al Sajaah - Spare Parts Backend
-- Run this in the Supabase SQL editor (Dashboard -> SQL Editor)
-- ============================================================

-- ------------------------------------------------------------
-- parts table
-- ------------------------------------------------------------
create table if not exists public.parts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  part_number text,
  condition text not null default 'new' check (condition in ('new', 'used', 'refurbished', 'genuine_oem', 'aftermarket')),
  price numeric(10,2),
  stock_status text not null default 'in_stock' check (stock_status in ('in_stock', 'backorder', 'out_of_stock')),
  category text,
  brand text,
  description text,
  compatibility jsonb not null default '[]'::jsonb,
  photos jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists parts_created_at_idx on public.parts (created_at desc);

-- updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists parts_set_updated_at on public.parts;
create trigger parts_set_updated_at
  before update on public.parts
  for each row
  execute function public.set_updated_at();

-- ------------------------------------------------------------
-- Row Level Security
--   - anyone (public catalog) can read parts
--   - only authenticated users can write
--   (the app further restricts writes to ADMIN_EMAILS server-side)
-- ------------------------------------------------------------
alter table public.parts enable row level security;

drop policy if exists "Public read parts" on public.parts;
create policy "Public read parts"
  on public.parts for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated insert parts" on public.parts;
create policy "Authenticated insert parts"
  on public.parts for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated update parts" on public.parts;
create policy "Authenticated update parts"
  on public.parts for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated delete parts" on public.parts;
create policy "Authenticated delete parts"
  on public.parts for delete
  to authenticated
  using (true);

-- ------------------------------------------------------------
-- Storage: part-photos bucket
--   - public read (photos render on the public site)
--   - authenticated users can upload / delete
-- ------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('part-photos', 'part-photos', true)
on conflict (id) do nothing;

drop policy if exists "Public read part photos" on storage.objects;
create policy "Public read part photos"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'part-photos');

drop policy if exists "Authenticated upload part photos" on storage.objects;
create policy "Authenticated upload part photos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'part-photos');

drop policy if exists "Authenticated update part photos" on storage.objects;
create policy "Authenticated update part photos"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'part-photos');

drop policy if exists "Authenticated delete part photos" on storage.objects;
create policy "Authenticated delete part photos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'part-photos');
