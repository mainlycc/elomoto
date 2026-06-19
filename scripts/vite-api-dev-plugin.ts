import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin, ViteDevServer } from 'vite';

function readRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function createVercelResponse(res: ServerResponse) {
  return {
    status(code: number) {
      res.statusCode = code;
      return {
        json(data: unknown) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        },
      };
    },
  };
}

function applyEnv(env: Record<string, string>) {
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

export function apiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'elomoto-api-dev',
    configureServer(server: ViteDevServer) {
      applyEnv(env);

      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split('?')[0];
        if (pathname !== '/api/contact') {
          next();
          return;
        }

        try {
          const module = await server.ssrLoadModule('/api/contact.ts');
          const handler = module.default as (req: IncomingMessage & { body?: string }, res: unknown) => Promise<void>;

          const body =
            req.method === 'POST' || req.method === 'PUT' ? await readRequestBody(req) : undefined;

          const vercelReq = Object.assign(req, { body });
          await handler(vercelReq, createVercelResponse(res));
        } catch (error) {
          console.error('[api-dev] /api/contact error:', error);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, message: 'Internal dev server error.' }));
          }
        }
      });
    },
  };
}
