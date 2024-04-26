export default function Page({
  params: { slug },
}: {
  params: { slug: string };
  }) {
  return (
    <div>
      <h1>Page {slug}</h1>
    </div>
  );
}
