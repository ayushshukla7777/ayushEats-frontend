import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

function UserProfilePage() {
  const { updateUser , isLoading:isUpdateLoading } =useUpdateMyUser()
  const { isLoading: isGetLoading, error, currentUser } = useGetMyUser();

  if(isGetLoading){
    return(
      <span>Loading User Data...</span>
    )
  }
  if(error){
    return(
      <span>Can't get the user</span>
    )
  }
  if (!currentUser) {
    throw new Error("Cound not get User Data")
  }
  return (
    <UserProfileForm 
      currentUser={currentUser}
    onSave={updateUser}
      isLoading={isUpdateLoading}
    />
    )
}

export default UserProfilePage