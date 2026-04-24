let cache = null;
let promise = null;

export async function getContent() {

  if (cache) return cache;
  if (promise) return promise;

  promise = fetch("/data/content.json")
    .then(r => r.json())
    .then(d => {
      cache = d;
      return d;
    });

  return promise;
}