import SubTitle from "components/SubTitle";
import Table from "components/Table";
import Tiles from "components/Tiles";
import UsersList from "components/UsersList";
import moment from "moment";
import { useState } from "react";
import { generateSampleData } from "UsersEntity";

export default function Audience() {
  const users = generateSampleData();
  const [selectedUserId, setSelectedUserId] = useState<string>(users[0].id);

  const selectedUser = users.find((user) => user.id === selectedUserId)!;

  const tableRows = Object.entries(selectedUser.attributes).map(
    ([key, value]) => [key, value]
  );

  const tableColumns = ["Attribute", "Value"];

  const tiles = [
    { title: "Devices", value: selectedUser.devices },
    { title: "Sessions", value: selectedUser.sessions.length },
    { title: "Events", value: selectedUser.events },
  ];

  return (
    <>
      <main>
        <div className="audience-page">
          <section className="users">
            <header>
              <h1 className="header-title">Users in Audience</h1>
              <SubTitle>
                Total Users - Showing {users.length} matching users
              </SubTitle>
            </header>

            <UsersList
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              users={users}
            />
          </section>

          <section className="user-details">
            <div className="top-bar">
              <h2 className="title">{selectedUser.id}</h2>
              <SubTitle>
                {moment(selectedUser.created).format("MMMM DD, YYYY, h:mm A")} -{" "}
                {selectedUser.location}
              </SubTitle>
            </div>

            <Tiles items={tiles} />

            <Table columns={tableColumns} rows={tableRows} />
          </section>
        </div>
      </main>
    </>
  );
}
