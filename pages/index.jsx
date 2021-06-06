import React from "react";
import useSWR from 'swr'

export default function Index() {
  const { data, error } = useSWR('http://localhost:8055/items/restaurants', (url) => fetch(url).then(res => res.json()))
  return (
    <div>
      <p> Hello world </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
