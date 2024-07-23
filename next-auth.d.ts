import { UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  uniqueIdForUser: string;
  referredBy: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
