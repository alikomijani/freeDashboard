import { useState, useRef, createContext, useContext } from "react";

const HoverContext = createContext({
  hover: false,
  setHover: () => {},
  rootRef: null,
});

const Hover = ({ children }) => {
  const [hover, setHover] = useState(false);
  const rootRef = useRef(null);
  return (
    <HoverContext.Provider
      value={{
        hover,
        setHover,
        rootRef,
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        {children}
      </div>
    </HoverContext.Provider>
  );
};

const HoverButton = ({ children }) => {
  const { setHover, rootRef } = useContext(HoverContext);
  return (
    <div
      ref={rootRef}
      style={{
        cursor: "pointer",
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {children}
    </div>
  );
};

const HoverMenu = ({ children }) => {
  const { hover, rootRef } = useContext(HoverContext);
  return (
    <div
      style={{
        display: hover ? "block" : "none",
        position: "absolute",
        top: rootRef.current?.offsetHeight ?? 0,
        left: 0,
        width: 300,
      }}
    >
      {children}
    </div>
  );
};

Hover.Button = HoverButton;
Hover.Menu = HoverMenu;
export default Hover;
