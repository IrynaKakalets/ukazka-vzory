import { useEffect, useState } from 'react';
import { Detail } from '../Detail';

export const Main = () => {
  const [item, setItem] = useState(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('http://localhost:4001/api/items/0');
      const json = await response.json();
      setItem(json.data);
    }

    fetchItem();
  }, []);
  
  if (item === null) {
    return <p>Loading...</p>;
  }

  const toggleOpened = () => {
    setOpened(!opened);
  }

  return (
    <>
      <div
        className="panel"
        onClick={toggleOpened}
      >
        {item.name}
      </div>
      <Detail opened={opened} description={item.description} />
    </>
  );
};
