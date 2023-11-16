import { serve } from 'https://deno.land/std@0.116.0/http/server.ts';
import staticFiles from 'https://deno.land/x/static_files@1.1.6/mod.ts';
import { folder } from './constants.ts';

const serveFiles = (req: Request) =>
  staticFiles(folder)({
    request: req,
    respondWith: (r: Response) => r,
  });

serve((req) => serveFiles(req), { addr: ':3000' });

console.log('Running on http://localhost:3000');
