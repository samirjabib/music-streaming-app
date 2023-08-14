export const metadata = {
  title: "Music Beats App",
  description: "Listen Beats",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
