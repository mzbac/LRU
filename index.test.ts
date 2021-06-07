import { LRU } from './LRU';

test('no cache found return undefined', () => {
    const cache = new LRU<string, { name: string }>(3);

    expect(cache.get('test')).toBeUndefined();
});

test('put item in cache if not exist', () => {
    const cache = new LRU<string, { name: string }>(3);
    cache.put('test', { name: 'name' });

    expect(cache.get('test').name).toBe('name');
});



test('delete least read item in cache if out of LRU capacity ', () => {
    const cache = new LRU<string, { name: string }>(3);
    cache.put('test1', { name: 'name1' });
    cache.put('test2', { name: 'name2' });
    cache.put('test3', { name: 'name3' });
    cache.put('test4', { name: 'name4' });

    expect(cache.get('test1')).toBeUndefined()
});