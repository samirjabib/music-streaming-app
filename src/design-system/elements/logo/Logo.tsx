import { Title } from "@/design-system";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div>
      <Link href="/" className="logo">
        <Title>
          Fire<span className="text-primary">Beats</span>
        </Title>
      </Link>
    </div>
  );
};

export default Logo;
