import LoginButton from "@/components/LoginButton"
import { getServerSession } from "next-auth"
import { AuthOptions } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import LogoutButton from "@/components/LogoutButton";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <nav className='flex justify-between items-center mt-3'>
        <div>
          {session?.user?.name || "Name"}
        </div>
        <div>
            {session? <LogoutButton />: <LoginButton /> }
        </div>
      </nav>
    </main>
  )
}
