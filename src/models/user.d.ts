type UserModel = {
    id: string;
    img: string,
    name: string,
    email: string;
    active: boolean;
    startDate: string;
    Role: "admin" | "it" | "software" | "data-entry"
}
export default UserModel;