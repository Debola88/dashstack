"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const customerData = [
  { name: "New customer", value: 34249, color: "#4F46E5" },
  { name: "Repeated", value: 1420, color: "#93C5FD" },
];

export default function CustomerCard() {
  const total = customerData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Customer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={customerData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 place-items-center">
          {customerData.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="text-2xl font-bold tabular-nums">
                {item.value.toLocaleString()}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div> {item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
