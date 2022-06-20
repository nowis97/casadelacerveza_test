import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {getCategories} from "../../features/catalog/services/catalog.service";


interface Props {
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>
}

export default function SelectCategories({selectedCategory, setSelectedCategory}: Props) {
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(() => {
        getCategories().then(setCategories);
    }, [])
    
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.currentTarget.value);
    }

    return (
        <label>
            Filtrar por: 
            <select value={selectedCategory} onChange={handleChange}>
                <option value={''}> Todos </option>
                {categories.map((category, idx) => <option key={idx} value={category}> {category} </option>)}
            </select>
        </label>
    )
}