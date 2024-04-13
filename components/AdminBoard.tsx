/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminOrders from "./AdminOrders";
import AdminMessages from "./AdminMessages";

export default function AdminBoard() {
  return (
    <main>
      <Tabs defaultValue="orders" className="wrapper">
        <TabsList className="grid w-full grid-cols-2 bg-emerald-700 rounded-t-none  ">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>See Current Orders</CardDescription>
            </CardHeader>
            <CardContent>
              <AdminOrders />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>See Latest Messages</CardDescription>
            </CardHeader>
            <CardContent>
              <AdminMessages />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
