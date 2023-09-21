import './globals.css'


//rootlayout server part
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='p-12'>
       
       
        
        {children}</body>
    </html>
  )
}
