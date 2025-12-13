import './globals.css'

export const metadata = {
  title: 'GD Finland List',
  description: 'Geometry Dash Finland Demon List'
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
