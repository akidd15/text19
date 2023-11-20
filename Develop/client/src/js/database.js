import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

const jate = await openDB('jate', 1);
const tx = jate.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.add({ text: content });
const result = await request;
console.log('Data added to the database', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { 
  console.error('getDb not implemented');

const jate = await openDB('jast', 1);
const tx = jate.transaction('jast', 'readonly');
const store = tx.objectStore('jate');
const request = store.getAll();

const result = await request;
console.log('result.value', result);
return result;

}
initdb();
// npm install webpack
// npm i
// npm run start
