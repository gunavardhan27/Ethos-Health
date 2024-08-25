export default function StoriesPaginate({totalPages,paginate,currentPage}){
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
     pageNumbers.push(i);
    }
    function trigger(num){
        paginate(num)
    }
    return (
        <nav>
        <ul className="flex flex-row items-center justify-between">
          {pageNumbers.map(number => (
            <li key={number} className={`${number === currentPage ? 'text-black' : 'text-blue-500'}
             `}>
              <button className="text-md p-3" onClick={()=>trigger(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )
}