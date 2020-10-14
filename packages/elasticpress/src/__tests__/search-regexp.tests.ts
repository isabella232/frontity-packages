import { searchRegExp } from '..';

const regexp = new RegExp(searchRegExp);

describe('searchRegExp', () => {
	it('catches the root searches', () => {
		expect(regexp.test('?s=text')).toBe(true);
		expect(regexp.test('/?s=text')).toBe(true);
		expect(regexp.test('?sa=1&s=text')).toBe(true);
		expect(regexp.test('/?sa=1&s=text')).toBe(true);
		expect(regexp.test('/page/2/?s=text')).toBe(true);
		expect(regexp.test('/page/2/?sa=1&s=text')).toBe(true);
		expect(regexp.test('/page/2?s=text')).toBe(true);
		expect(regexp.test('/page/2?sa=1&s=text')).toBe(true);
		expect(regexp.test('/page/10/?s=text')).toBe(true);
		expect(regexp.test('/page/10/?sa=1&s=text')).toBe(true);
		expect(regexp.test('/page/10?s=text')).toBe(true);
		expect(regexp.test('/page/10?sa=1&s=text')).toBe(true);
	});

	it("doesn't catch the home", () => {
		expect(regexp.test('/')).toBe(false);
		expect(regexp.test('/?sa=1')).toBe(false);
		expect(regexp.test('?sa=1')).toBe(false);
		expect(regexp.test('/page/2')).toBe(false);
		expect(regexp.test('/page/2?sa=1')).toBe(false);
		expect(regexp.test('/page/2/')).toBe(false);
		expect(regexp.test('/page/2/?sa=1')).toBe(false);
	});

	it("doesn't catch category or tag searches", () => {
		expect(regexp.test('/category/art?s=1')).toBe(false);
		expect(regexp.test('/category/art/?s=1')).toBe(false);
		expect(regexp.test('/category/art/page/2?s=1')).toBe(false);
		expect(regexp.test('/category/art/page/2/?s=1')).toBe(false);
		expect(regexp.test('/tag/art?s=1')).toBe(false);
		expect(regexp.test('/tag/art/?s=1')).toBe(false);
		expect(regexp.test('/tag/art/page/2?s=1')).toBe(false);
		expect(regexp.test('/tag/art/page/2/?s=1')).toBe(false);
	});
});
