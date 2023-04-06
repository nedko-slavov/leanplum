interface TilesProps {
  items: { title: string; value: number }[];
}

export default function Tiles({ items }: TilesProps) {
  return (
    <div className="tiles">
      {items.map((item) => (
        <div className="tile" key={item.title}>
          <h3 className="title">{item.title}</h3>
          <div className="value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
