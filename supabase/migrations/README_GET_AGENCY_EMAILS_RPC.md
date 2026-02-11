# RPC get_agency_emails_for_new_slots – ako spustiť

Ak vidíš chybu **404** alebo **Could not find the function public.get_agency_emails_for_new_slots**:

1. Otvor **Supabase Dashboard** → tvoj projekt.
2. V ľavom menu choď na **SQL Editor**.
3. Klikni **New query**.
4. Skopíruj **celý obsah** súboru `add_get_agency_emails_rpc.sql` (vrátane `DROP FUNCTION` a `CREATE OR REPLACE FUNCTION`).
5. Klikni **Run** (alebo Ctrl+Enter).
6. Skontroluj, či je hláška zelená (Success). Ak je červená, pošli text chyby.
7. Ak Supabase cachuje schému API, môžeš v **Settings → API** skúsiť **Reload schema** (ak je k dispozícii), alebo chvíľu počkať a znova vytvoriť termíny.

Potom znova vytvor termíny v aplikácii – RPC by malo byť dostupné a notifikácie pôjdu na e-maily agentúr.
