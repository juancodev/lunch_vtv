import request from 'supertest';
import app from '../index.js';

describe('Pruebas de API de Servicios', () => {
  it('GET /api/v1/services debe devolver una lista de objectos de servicios',
    async () => {
      const response = await request(app).get('/api/v1/services');

      expect(response.statusCode).toBe(200);

      expect(Array.isArray(response.body)).toBe(true);
    }, 5000);
})