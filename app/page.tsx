import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div >
      <h2 className='text-3xl font-bold text-indigo-500'>Discord Clone</h2>
      <UserButton
      afterSignOutUrl="/"
      />
    </div>
    
  )
}
