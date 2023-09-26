import React from "react";
import UserTable from "./UsersTable/UserTable";
import Spinner from "../Spinner/Spinner";

export default function UserContentWrapper ({users, userModalToggle, userModal}) {
    return (
        <div className="container p-0 mt-3">
            {users.meta.success ? <UserTable users={users.data.users} userModalToggle={userModalToggle} userModal={userModal}></UserTable> : <Spinner/>}
        </div>
    )
}

