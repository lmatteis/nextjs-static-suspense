export default async function Data() {
  // fake an async request that takes 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <div>Data</div>;
}
