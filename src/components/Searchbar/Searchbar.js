import  "./Searchbar.css";

export default function SearchBar() {
  return (
    <body className="z">
    <div class="d-flex align-items-center justify-content-center  flex-column gap-4">
    <form class="d-flex">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
</div>
</body>
  );
}
