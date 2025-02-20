import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { faker } from "@faker-js/faker"
const GlobalContext = createContext(undefined);

function generateRandomNews(count) {
  const randomNews = Array.from({ length: count})
  .map(_ => {
    const random = {
      id: faker.string.uuid(),
      headline: faker.lorem.paragraph(1),
      details: faker.lorem.paragraphs({ min: 1, max: 3}),
      img: faker.image.avatar(),
      category: Math.floor(Math.random() * 3)
    }
    return random;
  });
  return randomNews;
}

function generateRandomExperiences(count) {

  const randoExperiences = Array.from({ length: count})
  .map(_ => {
    const pcount = Math.random() > 0.5 ? 3 : 5;
    const randomEpx = {
      id: crypto.randomUUID(),
      journy: Array.from({ length: pcount}).map(_ => faker.lorem.paragraph({ min: 8, max: 12})),
      img: faker.image.avatar(),
      fullName: faker.person.fullName(),
      bio: faker.person.bio(),
      timeLine: {from: faker.date.past().getFullYear(), to: faker.date.future().getFullYear()}
    }
    return randomEpx;
  });
  return randoExperiences;
}

function GlobalContextProvider({ children }) {
  const [news, setNews] = useState(generateRandomNews(15));
  const [experiences, setExperiences] = useState(generateRandomExperiences(5));
  const [user, setUser] = useState({
    name: "Larry",
    img: "/cat-5579221.jpg",
  });

  return (
    <GlobalContext.Provider value={{
      news,
      setNews,
      experiences,
      setExperiences,
      user,
      setUser
    }}>
      { children }
    </GlobalContext.Provider>
  );
}


function useGlobalContext() {

  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("Context used out of scope.");
  return context;
}


export default GlobalContextProvider;

export { useGlobalContext };