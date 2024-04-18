export default function BlogPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Blog post {id}</h1>
    </div>
  );
}
