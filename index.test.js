const MoltinNodeStorageAdapter = require('./')

const key = 'someKey'
const value = 'someValue'

test('Adapter sets value', () => {
  const storage = new MoltinNodeStorageAdapter()

  expect(storage.set(key, value)).toBeUndefined()
})

test('adapter gets value by key', () => {
  const storage = new MoltinNodeStorageAdapter()

  expect(storage.get(key)).toEqual(value)
})

test('adapter deletes key', () => {
  const storage = new MoltinNodeStorageAdapter()
  storage.delete(key)

  expect(storage.get(key)).toBe(null)
})
