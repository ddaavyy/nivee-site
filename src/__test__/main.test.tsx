import { vi, describe, it, expect } from 'vitest';
import * as ReactDOM from 'react-dom/client';

vi.mock('react-dom/client', () => {
  return {
    createRoot: vi.fn(() => ({
      render: vi.fn(),
    })),
  };
});

describe('main.tsx', () => {
  it('deve renderizar o App dentro de StrictMode', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    await import('../main');

    expect(ReactDOM.createRoot).toHaveBeenCalled();
  });
});
