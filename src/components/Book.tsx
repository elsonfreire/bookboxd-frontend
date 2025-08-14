type BookProps = {
  bookId: string;
};

export const Book = ({ bookId }: BookProps) => {
  const openBookPage = () => {
    window.location.href = `/books/${bookId}`;
  };

  return (
    <button onClick={() => openBookPage()}>
      <img
        className="h-full w-full rounded-xs object-cover"
        src="http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      />
    </button>
  );
};
