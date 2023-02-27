const request = require('supertest');
const express = require("express");
const app = express();

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true);
    });
});


describe('Movies Post Endpoints', () => {
    it('should create a new movie', async () => {
        const res = await request(app)
            .post('/api/movies')
            .send({
                name: 'Avengers: Endgame test 2',
                year: '2018',
                genres: ['Adventure', 'Sci-fi', 'Animation'],
                ageLimit: 4,
                rating: 5,
                actors:[{"firstName":"Robert", "lastName":" Downey Jr."}],
                director:[{"firstName":"Anthony", "lastName":"Russo"}],
                synopsis: "After the devastating events of Avengers",
            });
        console.log(res);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('post');
    });

    it('should fetch a single movie', async () => {
        const postId = '63f7c284520cd7dd675b9372';
        const res = await request(app).get(`/api/movies/${postId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('post');
    });

    it('should fetch all movies', async () => {
        const res = await request(app).get('/api/movies');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('posts');
        expect(res.body.posts).toHaveLength(1);
    });
});