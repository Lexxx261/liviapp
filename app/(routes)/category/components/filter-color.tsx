import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FiltersTypes } from "@/types/filter";

type FiltersColorProps = {
    setFilterColor: (Color: string) => void
}

const FilterColor = (props: FiltersColorProps) => {
    const {setFilterColor} = props;
    const { result, loading }: FiltersTypes = useGetProductField()
    return (
        <div className="my-5 mb-3 font-bold">Color
            {loading && result == null && (
                <p>Cargando Categoria...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterColor(value)}>
                {result !== null && result.schema.attributes.Color.enum.map((Color: string) => (
                    <div key={Color} className="flex items-center space-x-2">
                        <RadioGroupItem value={Color} id={Color} />
                        <Label htmlFor={Color}>{Color}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterColor;
