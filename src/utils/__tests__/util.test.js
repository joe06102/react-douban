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
        const normalPadLeftExpect = '00110011';
        const normalPadRightExpect = '11001100';

        const emptyCase = {};
        const emptyExpect = null;

        it(`in: ${JSON.stringify(normalCase)}, out: ${normalPadLeftExpect}`, () => {
            expect(Encode.padLeft(normalCase.num, normalCase.len, normalCase.placeholder)).toBe(normalPadLeftExpect);
        });

        it(`in: ${JSON.stringify(emptyCase)}, out: ${emptyExpect}`, () => {
            expect(Encode.padLeft(emptyCase.num, emptyCase.len, emptyCase.placeholder)).toBe(emptyExpect);
        });

        it(`in: ${JSON.stringify(normalCase)}, out: ${normalPadRightExpect}`, () => {
            expect(Encode.padRight(normalCase.num, normalCase.len, normalCase.placeholder)).toBe(normalPadRightExpect);
        });

        it(`in: ${JSON.stringify(emptyCase)}, out: ${emptyExpect}`, () => {
            expect(Encode.padRight(emptyCase.num, emptyCase.len, emptyCase.placeholder)).toBe(emptyExpect);
        });        

    });

    describe('Encode.getBase64 test', () => {

        const case_1 = 'M';
        const case_1_expect = 'TQ==';

        const case_2 = 'Ma';
        const case_2_expect = 'TWE=';
        
        const case_3 = 'ManMan';
        const case_3_expect = 'TWFuTWFu';        

        const case_4 = 'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.';
        const case_4_expect = 'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=';        

        //const emptyCase = {};
        //const emptyExpect = null;

        it(`in: ${JSON.stringify(case_1)}, out: ${case_1_expect}`, () => {
            expect(Encode.getBase64(case_1)).toBe(case_1_expect);
        });

        it(`in: ${JSON.stringify(case_2)}, out: ${case_2_expect}`, () => {
            expect(Encode.getBase64(case_2)).toBe(case_2_expect);
        });

        it(`in: ${JSON.stringify(case_3)}, out: ${case_3_expect}`, () => {
            expect(Encode.getBase64(case_3)).toBe(case_3_expect);
        });
        
        it(`in: ${JSON.stringify(case_4)}, out: ${case_4_expect}`, () => {
            expect(Encode.getBase64(case_4)).toBe(case_4_expect);
        });        

    });
});