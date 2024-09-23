import Link from "next/link";

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      {pages.map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`mx-1 px-3 py-1 border rounded ${
            page === currentPage ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
