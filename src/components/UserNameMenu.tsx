import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function UserNameMenu() {
    const { user, logout } = useAuth0();
    return (
        <div >
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {user?.email}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link className="container" to='/user-profile'>User Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Button onClick={()=>{logout()}}  className="flex-1 hover:bg-orange-500 ">Logout</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserNameMenu