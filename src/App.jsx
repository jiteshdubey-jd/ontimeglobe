import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button>Secondary</Button> <br />
      <br />
      <Button variant="destructive">X</Button> <br />
      <br />
      <Button variant="secondary">Secondary</Button> <br />
      <br />
      <Button variant="ghost">Secondary</Button> <br />
      <br />
    </>
  );
}

export default App;
