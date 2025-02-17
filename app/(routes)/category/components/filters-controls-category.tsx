import FilterColor from "./filter-color";


type FiltersControlsCategoryProps = {
    setFilterColor: (Color: string) => void
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const {setFilterColor} = props

    return (
       <div className="sm:w-[350px] sm:mt-5">
        <FilterColor setFilterColor={setFilterColor} />
       </div>
    )
}

export default FiltersControlsCategory;