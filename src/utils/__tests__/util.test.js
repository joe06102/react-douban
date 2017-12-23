import { Url } from '../url';
import { Encode } from '../encode';

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

describe('Encode test', () => {

    describe('Encode.pad test', () => {

        const normalCase = { num: 110011, len: 8, placeholder: 0 };
        const normalExpect = '00110011';

        const emptyCase = {};
        const emptyExpect = null;

        it(`in: ${JSON.stringify(normalCase)}, out: ${normalExpect}`, () => {
            expect(Encode.pad(normalCase.num, normalCase.len, normalCase.placeholder)).toBe(normalExpect);
        });

        it(`in: ${JSON.stringify(emptyCase)}, out: ${emptyExpect}`, () => {
            expect(Encode.pad(emptyCase.num, emptyCase.len, emptyCase.placeholder)).toBe(emptyExpect);
        });

    });

    describe('Encode.getBase64 test', () => {

        const case_1 = 's13';
        const case_1_expect = 'czEz';

        const case_2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+=/<>;\'"[]{}\\|';
        const case_2_expect = 'QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlgfiFAIyQlXiYqKClfLSs9Lzw+O1wnIltde31cXHw=';        

        //const emptyCase = {};
        //const emptyExpect = null;

        it(`in: ${JSON.stringify(case_1)}, out: ${case_1_expect}`, () => {
            expect(Encode.getBase64(case_1)).toBe(case_1_expect);
        });

        it(`in: ${JSON.stringify(case_2)}, out: ${case_2_expect}`, () => {
            expect(Encode.getBase64(case_2)).toBe(case_2_expect);
        });

    });
});