import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
  description: string;
  createdAt: string;
}>;

export function CreateRoom() {
  const { data: rooms, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Create Room</h1>
      {isLoading && <p>Loading...</p>}
      {rooms?.map((room) => {
        return (
          <Link key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        );
      })}
    </div>
  );
}
