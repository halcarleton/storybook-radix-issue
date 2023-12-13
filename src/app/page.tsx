import { Button } from '@/stories/Button'
import { TestElement } from '@/stories/TestElement'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Button label='Theme test' primary/>
      <TestElement />
    </main>
  )
}
