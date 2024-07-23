"use client";
import BreadCrumb from "@/components/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAllUser, getUserByEmail } from "@/data/user";
import { FaUser } from "react-icons/fa";
// import { useCurrentUser } from "@/hooks/use-current-user";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { users } from '@/constants/data';

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useCurrentUser();
  // const currentUser = getUserByEmail(user?.email ?? "");
  console.log(user);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        {/* <UserClient data={users} /> */}
        <div className="shadow-sm flex flex-col p-5 gap-5">
          <p className=" font-semibold text-3xl">Profile</p>
          <div className="flex items-center justify-center">
            <Avatar className="w-32 h-32">
              <AvatarImage src={user?.image || undefined} />
              <AvatarFallback className="bg-purple-400 text-white">
                <FaUser />
              </AvatarFallback>
            </Avatar>
          </div>
          <Label>User Account</Label>
          <Input placeholder={user?.uniqueIdForUser} disabled></Input>
          <Label>Name</Label>
          <Input placeholder={user?.name ?? ""} disabled></Input>
          <Label>Email</Label>
          <Input placeholder={user?.email ?? ""} disabled></Input>
          <Label>Referred By</Label>
          <Input placeholder={user?.referredBy} disabled></Input>
        </div>
      </div>
    </>
  );
}
