import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import contactDetails from "@/data/contactDetails";
import "../styles/navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="contact-info">
        <p>{contactDetails.email}</p>
        <Separator className="separator hide-when-small" orientation="vertical" />
        <p className="hide-when-small">{contactDetails.phoneNumber}</p>
      </div>
      <Button className="custom-btn">GET QUOTE</Button>
    </div>
  );
};
