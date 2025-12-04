import { Card, CardHeader, Text } from "@ui5/webcomponents-react";

export function MyApp() {
  return (
    <div style={{ padding: "2rem" }}>
      <Card header={<CardHeader titleText="Card" />}>
        <Text>This is the content area of the Card</Text>
      </Card>
    </div>
  );
}