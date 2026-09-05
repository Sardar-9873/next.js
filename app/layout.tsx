export interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {

  return (
    <html>
      <head>
        <title>NEXT.js</title>
      </head>
      <body>
        <div>
          <p>NEXT.js with Sahal</p>
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}

export default Layout;