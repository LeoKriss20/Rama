-- ==========================================
-- RaMa - Gestión Digital
-- AUDITORÍA DE SEGURIDAD SUPABASE
-- Versión: 1.0
-- Fecha: 11/11/2026
-- Repositorio oficial: LeoKriss20/Rama
--
-- IMPORTANTE:
-- Este archivo documenta consultas de auditoría.
-- No ejecutar todo el archivo indiscriminadamente.
-- El bloque REVOKE ya fue ejecutado y verificado.
-- ==========================================

SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
ORDER BY tablename, policyname;

SELECT
  tablename,
  rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
ORDER BY tablename;


SELECT
  p.proname AS function_name,
  pg_get_functiondef(p.oid) AS definition
FROM pg_proc p
JOIN pg_namespace n
  ON n.oid = p.pronamespace
WHERE n.nspname = 'public'
  AND p.proname IN (
    'is_rama_admin',
    'is_rama_master',
    'is_rama_simple_admin'
  )
ORDER BY p.proname;

SELECT
  table_name,
  grantee,
  privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
  AND grantee IN ('anon', 'authenticated')
ORDER BY table_name, grantee, privilege_type;

SELECT
  rol.rolname AS role_name,
  tbl.relname AS table_name,
  privilege,
  has_table_privilege(
    rol.rolname,
    tbl.oid,
    privilege
  ) AS granted
FROM pg_roles rol
CROSS JOIN pg_class tbl
CROSS JOIN (
  VALUES
    ('SELECT'),
    ('INSERT'),
    ('UPDATE'),
    ('DELETE'),
    ('TRIGGER'),
    ('REFERENCES')
) AS privileges(privilege)
WHERE rol.rolname IN ('anon', 'authenticated')
  AND tbl.relname IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
  AND tbl.relnamespace = 'public'::regnamespace
ORDER BY tbl.relname, rol.rolname, privilege;

SELECT
  routine_name,
  grantee,
  privilege_type
FROM information_schema.routine_privileges
WHERE specific_schema = 'public'
  AND routine_name IN (
    'is_rama_admin',
    'is_rama_master',
    'is_rama_simple_admin',
    'provision_rama_admin'
  )
ORDER BY routine_name, grantee;

SELECT
  n.nspname AS schema_name,
  r.rolname AS role_name,
  has_schema_privilege(
    r.rolname,
    n.oid,
    'USAGE'
  ) AS can_use_schema,
  has_schema_privilege(
    r.rolname,
    n.oid,
    'CREATE'
  ) AS can_create_objects
FROM pg_namespace n
CROSS JOIN pg_roles r
WHERE n.nspname = 'public'
  AND r.rolname IN (
    'anon',
    'authenticated',
    'public'
  )
ORDER BY r.rolname;

SELECT
  c.relname AS table_name,
  pg_catalog.pg_get_userbyid(c.relowner) AS table_owner
FROM pg_class c
JOIN pg_namespace n
  ON n.oid = c.relnamespace
WHERE n.nspname = 'public'
  AND c.relname IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
ORDER BY c.relname;

SELECT
  table_name,
  grantee,
  privilege_type,
  is_grantable
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
  AND privilege_type IN (
    'TRIGGER',
    'REFERENCES'
  )
ORDER BY table_name, grantee, privilege_type;

SELECT
  table_name,
  grantee,
  privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
  AND grantee = 'PUBLIC'
ORDER BY table_name, privilege_type;

REVOKE TRIGGER, REFERENCES
ON TABLE
  public.admin_users,
  public.booking_requests,
  public.reviews
FROM anon, authenticated;

SELECT
  table_name,
  grantee,
  privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name IN (
    'admin_users',
    'booking_requests',
    'reviews'
  )
  AND grantee IN (
    'anon',
    'authenticated'
  )
  AND privilege_type IN (
    'TRIGGER',
    'REFERENCES'
  )
ORDER BY table_name, grantee;

