
- SIGTAP auto-sync: edge function `sincronizar-sigtap` (invoked with x-region sa-east-1, DATASUS blocks foreign IPs) stores 0304 snapshots in `sigtap_bases` and logs every run with a critique in `sigtap_sincronizacao`; a newer stored competência overrides the compiled base at startup (main.tsx). Why: monthly update without manual uploads, and visible failure when the source changes.
