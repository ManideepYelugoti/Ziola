import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";


import logo from "../../assets/ziola.png";
import { Button } from "@/components/ui/button";

const menu = [
  {
    name: "Inventory",
    submenu: [
      {
        name: "Flu A",
      },
      {
        name: "Flu B",
      },
      {
        name: "Covic",
      },
    ],
  },
  {
    name: "Insights",
    submenu: [
      {
        name: "California",
      },
      {
        name: "Colorado",
      },
      {
        name: "Florida",
      },
      {
        name: "Gorgia",
      },
    ],
  },
  {
    name: "Services",
    submenu: [
      {
        name: "Operations",
      },
      {
        name: "Therupeutics",
      },
    ],
  },
  {
    name: "About",
    submenu: [
      {
        name: "Vision",
      },
      {
        name: "Mission",
      },
      {
        name: "Management",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="flex p-0 px-10 m-0  items-center justify-around ">
      <div>
        <img src={logo} style={{ width: 200, height: 100 }} />
      </div>
      <div  className="flex p-0 m-0 " >
      {menu.map((item) => (
        <NavigationMenu key={item.name}>
          <NavigationMenuList>
            <NavigationMenuItem key={item.name}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                {item.submenu.map((_item) => (
                  <NavigationMenuLink key={_item.name}>
                    {_item.name}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}

      </div>
      <div  className="flex" >
        <Button  variant="outline" >Request</Button>
      </div>
      <div>

        <Button  variant="outline">Contact Us</Button>
      </div>
    </div>
  );
};

export default Navbar;
