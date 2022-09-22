import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title } = category;
  const { imageUrl } = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>show now</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
