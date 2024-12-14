"use client"

import { useState } from "react"
import { QuoteTable } from "./quote-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuoteList() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quote Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Quotes</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <QuoteTable status="all" />
          </TabsContent>
          <TabsContent value="pending">
            <QuoteTable status="pending" />
          </TabsContent>
          <TabsContent value="accepted">
            <QuoteTable status="accepted" />
          </TabsContent>
          <TabsContent value="expired">
            <QuoteTable status="expired" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}