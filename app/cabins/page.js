export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);

  return (
    <ul>
      <li key={data.id}>{data.title}</li>
    </ul>
  );
}
