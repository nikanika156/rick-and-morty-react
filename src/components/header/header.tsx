import { Logo } from "../../../public/svg/logo";
import { ComponentLoad } from "../components-load/component-load";

export function Header() {
  return (
    <header className="w-full bg-neutral-900">
      <div className="w-full h-20 px-5 max-w-320 m-auto">
        <ul className="h-full flex w-full items-center justify-end gap-5">
          <ComponentLoad
            path="/"
            text="Rick And Morty"
            icon={<Logo size={45} />}
            fontSize="text-2xl"
            className="mr-auto"
          />

          <ComponentLoad
            path="/character"
            text="Character"
            isMain={false}
            fontSize="text-xl"
          />
          <ComponentLoad
            path="/episode"
            text="Episode"
            isMain={false}
            fontSize="text-xl"
          />
          <ComponentLoad
            path="/location"
            text="Location"
            isMain={false}
            fontSize="text-xl"
          />
        </ul>
      </div>
    </header>
  );
}
