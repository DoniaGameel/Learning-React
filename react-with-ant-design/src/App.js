import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Button, Flex } from "antd";

function App() {
  return (
    <div className="App">
      <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </div>
  );
}

export default App;
