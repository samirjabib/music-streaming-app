import { Button, Icons } from "@/design-system";

const LoginProviders = () => {
  return (
    <div className=" space-y-4 w-full ">
      <Button className="w-full flex flex-row gap-x-2">
        <span> Login with Google</span>
        <Icons.google className="text-secondary w-4 h-4" />
      </Button>
    </div>
  );
};

export default LoginProviders;
