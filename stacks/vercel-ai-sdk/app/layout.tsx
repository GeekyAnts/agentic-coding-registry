export const metadata = {
  title: "AI-native chat",
  description: "Next.js + Vercel AI SDK, created with create-ai-native-project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
