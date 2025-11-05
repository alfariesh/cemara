export interface UserData {
    email: string;
    idSap: string | null;
    type: string;
    menus: {
        wcm: "enable" | "disable" | "x";
        dimas: "enable" | "disable" | "x";
        andalan: "enable" | "disable" | "x";
        respons: "enable" | "disable" | "x";
    };
}

export const mockUsers: UserData[] = [
    {
        email: "user_a@gmail.com",
        idSap: null,
        type: "subsidi",
        menus: { wcm: "enable", dimas: "disable", andalan: "x", respons: "x" },
    },
    {
        email: "user_b@gmail.com",
        idSap: "101",
        type: "subsidi",
        menus: { wcm: "enable", dimas: "enable", andalan: "x", respons: "x" },
    },
    {
        email: "user_c@gmail.com",
        idSap: null,
        type: "non subsidi",
        menus: { wcm: "x", dimas: "x", andalan: "disable", respons: "enable" },
    },
    {
        email: "user_d@gmail.com",
        idSap: "102",
        type: "non subsidi",
        menus: { wcm: "x", dimas: "x", andalan: "enable", respons: "enable" },
    },
    {
        email: "user_e@gmail.com",
        idSap: null,
        type: "subsidi, non subsidi",
        menus: { wcm: "disable", dimas: "enable", andalan: "disable", respons: "enable" },
    },
    {
        email: "user_f@gmail.com",
        idSap: null,
        type: "subsidi, non subsidi",
        menus: { wcm: "enable", dimas: "enable", andalan: "disable", respons: "enable" },
    },
    {
        email: "user_g@gmail.com",
        idSap: null,
        type: "subsidi, non subsidi",
        menus: { wcm: "disable", dimas: "enable", andalan: "enable", respons: "enable" },
    },
    {
        email: "user_h@gmail.com",
        idSap: "103",
        type: "subsidi, non subsidi",
        menus: { wcm: "disable", dimas: "enable", andalan: "enable", respons: "enable" },
    },
    {
        email: "user_i@gmail.com",
        idSap: "104",
        type: "subsidi, non subsidi",
        menus: { wcm: "enable", dimas: "enable", andalan: "enable", respons: "disable" },
    },
    {
        email: "user_j@gmail.com",
        idSap: null,
        type: "subsidi, non subsidi",
        menus: { wcm: "enable", dimas: "enable", andalan: "enable", respons: "disable" },
    },
    {
        email: "user_k@gmail.com",
        idSap: "205",
        type: "subsidi, non subsidi",
        menus: { wcm: "enable", dimas: "enable", andalan: "enable", respons: "enable" },
    },
    {
        email: "user_l@gmail.com",
        idSap: "105",
        type: "subsidi, non subsidi",
        menus: { wcm: "enable", dimas: "enable", andalan: "enable", respons: "enable" },
    },
];

export const DEFAULT_PASSWORD = "Pupuk123";

export function getUserByEmail(email: string): UserData | undefined {
    return mockUsers.find((user) => user.email === email);
}
