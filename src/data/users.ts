import UserModel from "../models/user";

const usersList: UserModel[] = [
    {
        id: "1",
        active: true,
        Role: "admin",
        img: "user1.jpg",
        name: "Muhammed Gamal",
        startDate: "2022-01-01",
        email: "jimmy@flowtechtics.com",
    },
    {
        id: "2",
        active: true,
        Role: "it",
        img: "user2.jpg",
        name: "Sara Ghazi",
        startDate: "2021-05-15",
        email: "sarah@flowtechtics.com",
    }
];

export default usersList;