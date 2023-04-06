import { UserEntity } from "UsersEntity";
import SubTitle from "./SubTitle";

interface UsersListProps {
  users: UserEntity[];
  selectedUserId: string;
  setSelectedUserId: (id: string) => void;
}

export default function UsersList({
  users,
  selectedUserId,
  setSelectedUserId,
}: UsersListProps) {
  return (
    <div className="users-list">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => setSelectedUserId(user.id)}
          className={`user ${selectedUserId === user.id ? "selected" : ""}`}
        >
          <h3 className="title">{user.id}</h3>
          <SubTitle>
            {user.devices} Devices - {user.sessions.length} Sessions -{" "}
            {user.location}
          </SubTitle>
        </div>
      ))}
    </div>
  );
}
