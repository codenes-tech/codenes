<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Public copy lives in `src/content/pt.ts` typed by `src/content/types.ts`; why: keeps a second language addable without touching components.
- Pure business logic (brand guard, WhatsApp lead message) lives in `src/domain/` with tests in `src/test/`; why: testable without React.
- Contact form validates with zod, saves to `public.leads` (anon INSERT only, no reads) via the `submitLead` server fn in `src/lib/leads.functions.ts`, then shows an in-page confirmation (no wa.me redirect); why: lead capture without exposing data.
- Theme: light default, `.dark` class persisted in localStorage via inline script in root; why: avoid flash.
