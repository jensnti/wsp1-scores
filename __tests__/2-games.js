const app = require('../app');
const supertest = require('supertest');
const pool = require('../utils/db');
const { response } = require('../app');

describe('/games', () => {
    beforeAll(async () => {
        try {
        } catch (error) {
            console.log(error);
        }
    });

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return supertest(app).get('/games').expect(200);
        });

        it('should return an array of games', () => {
            return supertest(app)
                .get('/games')
                .then((response) => {
                    expect(response.body.games).toEqual([]);
                });
        });
    });

    describe('GET /:gameId', () => {
        it('should return 200 OK', () => {
            return supertest(app).get('/games/123456').expect(200);
        });

        it('should return game data', () => {
            return supertest(app)
                .get('/games/123456')
                .then((response) => {
                    expect(response.body.data).toEqual([]);
                });
        });

        it('should return an error if gameId is not a number', () => {
            return supertest(app)
                .get('/games/abc')
                .then((response) => {
                    expect(response.body.errors[0].msg).toBe(
                        'gameId must be a number'
                    );
                });
        });
    });
});