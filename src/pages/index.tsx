export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: { msg: 'Hello World, SSR!' },
  };
}

export default function Home() {
  return <h1 className="m-4 text-center text-4xl text-red-500">Hello world!</h1>;
}
