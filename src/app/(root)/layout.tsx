import { PropsWithChildren } from "react";
import Header from "./_components/header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div
      id="root
  "
    >
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
