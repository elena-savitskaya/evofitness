import LOGO_URL from "@/assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="w-5/6 mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2 md:basis-2/5">
          <img alt="logo" src={LOGO_URL} className="w-32" />
          <p>
            Evogym is more than just a gym — it’s a community of people striving
            for strength, health, and success. We offer state-of-the-art
            equipment, expert personal training, and a motivating atmosphere to
            help you achieve your goals.
          </p>
          <p>© {new Date().getFullYear()} Evogym. All rights reserved.</p>
        </div>
        <div className="flex justify-between md:basis-2/5 gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold pb-2">Quick Links</h4>
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">Programs</p>
            <p className="hover:underline cursor-pointer">Memberships</p>
            <p className="hover:underline cursor-pointer">Contact</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold pb-2">Contact Us</h4>
            <p>123 Fitness St, New York, NY</p>
            <p>Phone: (888) 425-6825</p>
            <p>Email: contact@evogym.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
