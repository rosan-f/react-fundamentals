import { useSearchParams } from "react-router"

function ProductsPage (){

  const [searchParams, setSearchParams] = useSearchParams();

  function handleSortPrice(sortValue: string){
    searchParams.set("sort", sortValue)
    setSearchParams(searchParams)

  }
  return(
    <div>
      <h1>List Produk</h1>
      <ul>
        <li>Sort : {searchParams.get("sort")}</li>
        <li>query : {searchParams.get("q")}</li>
        <li>name : {searchParams.get("name")}</li>
      </ul>

      <button onClick={() => handleSortPrice("asc-price")}>sorting price</button>
    </div>
  )
}

export default ProductsPage
