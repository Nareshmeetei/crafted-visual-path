import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image
        src="/promise.png"
        alt="Illustration of feet in white lines on dark background"
        width={600}
        height={400}
        priority
        className="home-illustration"
      />
    </div>
  )
} 