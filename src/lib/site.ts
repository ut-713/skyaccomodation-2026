export const site = {
  name: "Sky Accommodation",
  suburb: "Wollongong",
  region: "NSW, Australia",
  phone: "(02) 4228 9320",
  phoneHref: "+61242289320",
  email: "manager@skyaccommodation.com.au",
  addressLine: "Wollongong CBD, NSW",
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Stays",
    href: "/rates",
    children: [
      {
        label: "Nightly & Weekly Rates",
        href: "/rates",
        description: "Standard double & twin rooms",
      },
      {
        label: "Student Accommodation",
        href: "/student-accommodation",
        description: "Permanent rooms from $165/week",
      },
      {
        label: "Corporate Stays",
        href: "/corporate-stays",
        description: "Mid-week packages from $85/night",
      },
    ],
  },
  { label: "Local Attractions", href: "/attractions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];
