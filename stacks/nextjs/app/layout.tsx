export const metadata = {
  title: "AI-native Next.js app",
  description: "Created with create-ai-native-project",
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
