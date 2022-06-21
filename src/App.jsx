import { Header } from "./contents";
import ContactMe from "./css-components/ContactMe";
import PlayfulText from "./css-components/PlayfulText";
import LinkedIn from "../images/linkedin.svg";
import GitHub from "../images/github_light.svg";
import Vue from "../images/vuedotjs.svg";
import ReactJS from "../images/react.svg";
import Svelte from "../images/svelte.svg";
import Angular from "../images/angular.svg";
import Blazor from "../images/blazor.svg";

function App() {
  return (
    <div
      className={`flex flex-col w-screen h-screen relative
        bg-dark-gradient text-white py-12 px-16`}
    >
      <ul
        className={`
            absolute top-1/2 left-16 -translate-y-1/2
            flex flex-col gap-6
            `}
      >
        {Header.Menus.map((m, i) => (
          <li key={i}>
            <m.icon size={24} opacity={0.25} />
          </li>
        ))}
      </ul>
      <div className={`flex items-center justify-between w-full`}>
        <div className="flex flex-col">
          <h1 className="staat text-5xl">{`JAWOON KIM`}</h1>
        </div>
        <div className="flex max-w-xl overflow-hidden gap-8">
          <div className="flex flex-none items-center gap-2">
            <img src={ReactJS} height={28} width={28} />
            <p className="staat text-xl">React</p>
          </div>
          <div className="flex flex-none items-center gap-2">
            <img src={Vue} height={28} width={28} />
            <p className="staat text-xl">Vue.js</p>
          </div>
          <div className="flex flex-none items-center gap-2">
            <img src={Angular} height={28} width={28} />
            <p className="staat text-xl">Angular</p>
          </div>

          <div className="flex flex-none items-center gap-2">
            <img src={Svelte} height={28} width={28} />
            <p className="staat text-xl">Svelte</p>
          </div>
          <div className="flex flex-none items-center gap-2">
            <img src={Blazor} height={28} width={28} />
            <p className="staat text-xl">Blazor</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ContactMe />
        </div>
      </div>
      <div
        className={`grow ml-40 rounded
        flex flex-col justify-center mont`}
      >
        <div className="flex flex-col text-7xl staat font-black">
          <h2>Web Frontend Developer</h2>
          <h2>from south korea</h2>
          <h2>based in germany</h2>
        </div>
        <div className="flex flex-col mt-4 gap-4 text-lg">
          <p>Let's make a cool one.</p>
          <div className="flex gap-4">
            <img
              onClick={() =>
                window.open("https://github.com/JayKim94", "_blank")
              }
              height="32"
              width="32"
              src={GitHub}
            />
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jawoon-kim-9b6528217/",
                  "_blank"
                )
              }
              height="32"
              width="32"
              src={LinkedIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
