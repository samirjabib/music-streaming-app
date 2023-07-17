import { Button, Icons } from "@/design-system";
import { FC } from "react";

type LoginProvidersProps = {
  loginWithGoogle: () => Promise<void>;
};



const LoginProviders: FC<LoginProvidersProps> = ({ loginWithGoogle }) => {
  return (
    <div className=" space-y-4 w-full ">
      <Button
        className="w-full flex flex-row gap-x-2"
        variant={"outline"}
        onClick={loginWithGoogle}
      >
        <span> Login with Google</span>
        <Icons.google className="text-foreground/60 w-4 h-4" />
      </Button>
    </div>
  );
};

export default LoginProviders;
