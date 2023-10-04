import { useState} from "react"
import { makeAutoObservable} from "mobx";


const PageStore = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return makeAutoObservable({
    setCurrentPage,
    currentPage,
});
}

export default PageStore;