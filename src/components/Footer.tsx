import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="pa flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={50}
            height={50}
            className="ml-2 h-4"
          />
        </a>
      </footer>
    </div>
  )
}
