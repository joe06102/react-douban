import { Url } from '../url';

describe('Url test', () => {

    describe('Url.resovle', () => {
        it('in: movies, subject. out: movies/subject', () => {
            expect(Url.resolve('movies', 'subject')).toBe('movies/subject');
        });
        it('in: "". out: ""', () => {
            expect(Url.resolve('')).toBe('');
        });
        it('in: undefined. out: ""', () => {
            expect(Url.resolve()).toBe('');
        });
        it('in: "/movies", "/subject". out: "movies/subject"', () => {
            expect(Url.resolve('/movies', '/subject')).toBe('movies/subject');
        });
        it('in: "//movies//", "//subject//". out: "movies/subject"', () => {
            expect(Url.resolve('//movies//', '//subject//')).toBe('movies/subject');
        });
        it('in: "//movies/title//", "//subject//". out: "movies/title/subject"', () => {
            expect(Url.resolve('//movies/title//', '//subject//')).toBe('movies/title/subject');
        });
        it('in: "//in-theater-h.z/title//", "//subject//". out: "in-theater-h.z/title/subject"', () => {
            expect(Url.resolve('//in-theater-h.z/title//', '//subject//')).toBe('in-theater-h.z/title/subject');
        });                                                                                                  
    });

    describe('Url.spliceQueryString', () => {

        const normalCase = { start: 0, count: 10 };
        const normalExpect = 'start=0&count=10';

        const emptyCase = {};
        const emptyExpect = '';

        const errorCase = undefined;
        const errorExpect = '';

        it(`in: ${JSON.stringify(normalCase)}, out: ${normalExpect}`, () => {
            expect(Url.spliceQueryString(normalCase)).toBe(normalExpect);
        });
        it(`in: ${JSON.stringify(emptyCase)}, out: ${emptyExpect}`, () => {
            expect(Url.spliceQueryString(emptyCase)).toBe(emptyExpect);
        });
        it(`in: ${errorCase}, out: ${errorExpect}`, () => {
            expect(Url.spliceQueryString(errorCase)).toBe(errorExpect);
        });               
    });
});