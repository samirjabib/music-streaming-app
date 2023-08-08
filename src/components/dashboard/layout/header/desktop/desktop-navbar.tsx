"use client";
import { ThemeDropDown, Title } from "@/design-system";

export default function Desktopnavbar() {
  return (
    <>
      {/* header desktop */}
      <>
        <div className="flex flex-row justify-between w-full">
          <div>
            <Title as="h2" size={"sectionTitle"} className="text-foreground">
              Dashboard BeatMaker
            </Title>
            <p className="text-muted-foreground">
              Maneja los ajustes de tu cuenta y tus preferencias.
            </p>
          </div>

          <ThemeDropDown />
        </div>
      </>
    </>
  );
}
