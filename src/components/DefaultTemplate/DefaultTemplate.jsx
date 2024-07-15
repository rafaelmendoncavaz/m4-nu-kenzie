import { Header } from "../Header/Header";

// eslint-disable-next-line react/prop-types
export function DefaultTemplate({ children }) {
  return (
    <>
      <Header />
      <main>
        { children } 
      </main>
    </>
  );
}